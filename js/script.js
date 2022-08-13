fetch('data.json')
.then(response => response.json())
.then(data => {
    // console.log(data);
    // daily
    document.getElementById('daily_work').innerText = data[0].title;
    document.getElementById('daily_work_current').innerText = data[0].timeframes.daily.current + "hrs";
    document.getElementById('daily_work_previous').innerText = "Yesterday - " + data[0].timeframes.daily.previous + "hrs";

    document.getElementById('daily_play').innerText = data[1].title;
    document.getElementById('daily_play_current').innerText = data[1].timeframes.daily.current + "hrs";
    document.getElementById('daily_play_previous').innerText = "Yesterday - " + data[1].timeframes.daily.previous + "hrs";

    document.getElementById('daily_study').innerText = data[2].title;
    document.getElementById('daily_study_current').innerText = data[2].timeframes.daily.current + "hrs";
    document.getElementById('daily_study_previous').innerText = "Yesterday - " + data[2].timeframes.daily.previous + "hrs";

    document.getElementById('daily_excercise').innerText = data[3].title;
    document.getElementById('daily_excercise_current').innerText = data[3].timeframes.daily.current + "hrs";
    document.getElementById('daily_excercise_previous').innerText = "Yesterday - " + data[3].timeframes.daily.previous + "hrs";

    document.getElementById('daily_social').innerText = data[4].title;
    document.getElementById('daily_social_current').innerText = data[4].timeframes.daily.current + "hrs";
    document.getElementById('daily_social_previous').innerText = "Yesterday - " + data[4].timeframes.daily.previous + "hrs";

    document.getElementById('daily_selfcare').innerText = data[5].title;
    document.getElementById('daily_selfcare_current').innerText = data[5].timeframes.daily.current + "hrs";
    document.getElementById('daily_selfcare_previous').innerText = "Yesterday - " + data[5].timeframes.daily.previous + "hrs";

    // weekly
    document.getElementById('weekly_work').innerText = data[0].title;
    document.getElementById('weekly_work_current').innerText = data[0].timeframes.weekly.current + "hrs";
    document.getElementById('weekly_work_previous').innerText = "Last Week - " + data[0].timeframes.weekly.previous + "hrs";

    document.getElementById('weekly_play').innerText = data[1].title;
    document.getElementById('weekly_play_current').innerText = data[1].timeframes.weekly.current + "hrs";
    document.getElementById('weekly_play_previous').innerText = "Last Week - " + data[1].timeframes.weekly.previous + "hrs";

    document.getElementById('weekly_study').innerText = data[2].title;
    document.getElementById('weekly_study_current').innerText = data[2].timeframes.weekly.current + "hrs";
    document.getElementById('weekly_study_previous').innerText = "Last Week - " + data[2].timeframes.weekly.previous + "hrs";

    document.getElementById('weekly_excercise').innerText = data[3].title;
    document.getElementById('weekly_excercise_current').innerText = data[3].timeframes.weekly.current + "hrs";
    document.getElementById('weekly_excercise_previous').innerText = "Last Week - " + data[3].timeframes.weekly.previous + "hrs";

    document.getElementById('weekly_social').innerText = data[4].title;
    document.getElementById('weekly_social_current').innerText = data[4].timeframes.weekly.current + "hrs";
    document.getElementById('weekly_social_previous').innerText = "Last Week - " + data[4].timeframes.weekly.previous + "hrs";

    document.getElementById('weekly_selfcare').innerText = data[5].title;
    document.getElementById('weekly_selfcare_current').innerText = data[5].timeframes.weekly.current + "hrs";
    document.getElementById('weekly_selfcare_previous').innerText = "Last Week - " + data[5].timeframes.weekly.previous + "hrs";

    // monthly
    document.getElementById('monthly_work').innerText = data[0].title;
    document.getElementById('monthly_work_current').innerText = data[0].timeframes.monthly.current + "hrs";
    document.getElementById('monthly_work_previous').innerText = "Last Month - " + data[0].timeframes.monthly.previous + "hrs";

    document.getElementById('monthly_play').innerText = data[1].title;
    document.getElementById('monthly_play_current').innerText = data[1].timeframes.monthly.current + "hrs";
    document.getElementById('monthly_play_previous').innerText = "Last Month - " + data[1].timeframes.monthly.previous + "hrs";

    document.getElementById('monthly_study').innerText = data[2].title;
    document.getElementById('monthly_study_current').innerText = data[2].timeframes.monthly.current + "hrs";
    document.getElementById('monthly_study_previous').innerText = "Last Month - " + data[2].timeframes.monthly.previous + "hrs";

    document.getElementById('monthly_excercise').innerText = data[3].title;
    document.getElementById('monthly_excercise_current').innerText = data[3].timeframes.monthly.current + "hrs";
    document.getElementById('monthly_excercise_previous').innerText = "Last Month - " + data[3].timeframes.monthly.previous + "hrs";

    document.getElementById('monthly_social').innerText = data[4].title;
    document.getElementById('monthly_social_current').innerText = data[4].timeframes.monthly.current + "hrs";
    document.getElementById('monthly_social_previous').innerText = "Last Month - " + data[4].timeframes.monthly.previous + "hrs";

    document.getElementById('monthly_selfcare').innerText = data[5].title;
    document.getElementById('monthly_selfcare_current').innerText = data[5].timeframes.monthly.current + "hrs";
    document.getElementById('monthly_selfcare_previous').innerText = "Last Month - " + data[5].timeframes.monthly.previous + "hrs";
   
});