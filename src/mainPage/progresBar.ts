export class ProgressBar {
    private static bar = document.getElementById('game-info__progress-bar');
    private static number = document.querySelector('.game-info__shots-left');
    private static start = 1;

    public static move() {
        ProgressBar.bar.value = ProgressBar.start;
        ProgressBar.number.innerHTML = ProgressBar.start;
        //if(ProgressBar.start === 30) navigate to lose page
        ProgressBar.start++;
    }
}