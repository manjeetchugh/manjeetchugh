—– BEGIN activity.py —–

import os import requests from collections import Counter from datetime
import datetime

USERNAME = os.environ[“GITHUB_USERNAME”] TOKEN =
os.environ[“GITHUB_TOKEN”]

HEADERS = { “Authorization”: f”Bearer {TOKEN}“,”Accept”:
“application/vnd.github+json” }

DAY_NAMES = [ “Monday”, “Tuesday”, “Wednesday”, “Thursday”, “Friday”,
“Saturday”, “Sunday”]

def get_commits(): commits = [] page = 1

    while True:
        url = (
            f"https://api.github.com/search/commits"
            f"?q=author:{USERNAME}"
            f"&per_page=100"
            f"&page={page}"
        )

        response = requests.get(
            url,
            headers=HEADERS,
            timeout=30
        )

        response.raise_for_status()

        data = response.json()
        items = data.get("items", [])

        if not items:
            break

        for item in items:
            commit_date = item["commit"]["author"]["date"]
            commits.append(commit_date)

        if len(items) < 100:
            break

        page += 1

    return commits

def classify_period(hour): if 5 <= hour < 12: return “Morning”

    if 12 <= hour < 17:
        return "Daytime"

    if 17 <= hour < 21:
        return "Evening"

    return "Night"

def progress_bar(value, maximum, length=20): if maximum == 0: return
“░” * length

    filled = round((value / maximum) * length)

    return (
        "█" * filled
        + "░" * (length - filled)
    )

def main(): commits = get_commits()

    if not commits:
        print("No commits found.")
        return

    days = Counter()
    hours = Counter()
    periods = Counter()

    for date_string in commits:
        dt = datetime.fromisoformat(
            date_string.replace("Z", "+00:00")
        )

        from zoneinfo import ZoneInfo

        dt = dt.astimezone(
            ZoneInfo("Asia/Kolkata")
        )

        days[dt.weekday()] += 1
        hours[dt.hour] += 1
        periods[classify_period(dt.hour)] += 1

    best_day = max(days, key=days.get)
    best_hour = max(hours, key=hours.get)
    best_period = max(periods, key=periods.get)

    peak_hour_end = (best_hour + 1) % 24

    day_count = days[best_day]
    hour_count = hours[best_hour]
    period_count = periods[best_period]

    total = len(commits)

    day_percentage = day_count / total * 100
    hour_percentage = hour_count / total * 100
    period_percentage = period_count / total * 100

    day_bar = progress_bar(day_count, total)
    hour_bar = progress_bar(hour_count, total)
    period_bar = progress_bar(period_count, total)

    start = "<!--START_SECTION:activity-profile-->"
    end = "<!--END_SECTION:activity-profile-->"

    content = f"""<!--START_SECTION:activity-profile-->

    ┌─[ ACTIVITY@GITHUB ]─[ ~/commits ]
    │
    │  > ACTIVITY ANALYSIS
    │
    │  📅 MOST ACTIVE DAY
    │  └─ {DAY_NAMES[best_day]}
    │     [{day_bar}] {day_percentage:.1f}%
    │
    │  ⏰ PEAK COMMIT TIME
    │  └─ {best_hour:02d}:00 – {peak_hour_end:02d}:00 IST
    │     [{hour_bar}] {hour_percentage:.1f}%
    │
    │  🌙 MOST ACTIVE PERIOD
    │  └─ {best_period}
    │     [{period_bar}] {period_percentage:.1f}%
    │
    │  📊 TOTAL COMMITS
    │  └─ {total:,}
    │
    └─[ ANALYSIS COMPLETE ]

““”

    with open("README.md", "r", encoding="utf-8") as f:
        readme = f.read()

    start_index = readme.find(start)
    end_index = readme.find(end)

    if start_index == -1 or end_index == -1:
        raise RuntimeError("Activity profile markers not found.")

    end_index += len(end)

    new_readme = (
        readme[:start_index]
        + content
        + readme[end_index:]
    )

    with open("README.md", "w", encoding="utf-8") as f:
        f.write(new_readme)

    print("Activity profile updated.")

if name == “main”: main()

—– END activity.py —–

