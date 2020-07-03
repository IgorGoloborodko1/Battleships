import { switchToLostPage } from './eventHelpers';

export class ProgressBar {
    private static bar = document.getElementById('game-info__progress-bar');
    private static number = document.querySelector('.game-info__shots-left');
    private static counter = 0;

    public static move(): void {
        ProgressBar.counter++;
        ProgressBar.bar.value = ProgressBar.counter;
        ProgressBar.number.innerHTML = ProgressBar.counter;
        if(ProgressBar.counter === 30) {
            switchToLostPage();
        }
    }

    public static getShotsLeft(): number {
        ProgressBar.counter++
        return ProgressBar.counter;
    }
}