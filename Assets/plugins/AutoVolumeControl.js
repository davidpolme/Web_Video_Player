class AutoVolumeControl {

    constructor(){
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this)
    }

    run(player) {
        this.player = player;

        const obvserver = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        });

        obvserver.observe(this.player.media);
    }
    handleIntersection(entries) {
        const entry = entries[0];

        // const isVisible = entry.intersectionRatio>= this.threshold
        // if (isVisible) {
            // this.player.loudVolume();
        // } else {
        //     this.player.lowVolume();
        // }

        if (entry.isIntersecting) {
            this.player.loudVolume();
        } else {
            this.player.lowVolume();
        }
    }
}

export default AutoVolumeControl;