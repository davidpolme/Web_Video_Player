class AutoPause {

    constructor() {
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }

    run(player) {
        this.player = player;
        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }

    handleVisibilityChange() {
        const isVisible = document.visibilityState;
        if ( isVisible === 'visible') {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause;