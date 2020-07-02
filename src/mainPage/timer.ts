export class Timer {
    private counter = 1;
    private currentTime: string;
    private timerEl = document.querySelector('.timer__display');

    public startTimer(): void {
        setInterval(() => {
            let min = Math.floor(this.counter / 60).toString();
            let sec = (this.counter % 60).toString();

            if(min.length < 2)  min = '0' + min;
            if(sec.length < 2) sec = '0' + sec;
            
            this.currentTime = `${min}:${sec}`;
            this.timerEl.innerHTML = this.currentTime;
            this.counter++;
        }, 1000);
    }

    public getCurrentTime(): string {
        return this.currentTime;
    } 
}