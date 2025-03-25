<script>
    import { onMount } from "svelte";

    onMount(() => {
        Array.from(document.getElementsByClassName("haze-path")).forEach(
            (pathElement) => {
                console.log(pathElement);
                pathElement.setAttribute(
                    "style",
                    "stroke-dasharray:" +
                        pathElement.getTotalLength() +
                        ";stroke-dashoffset:" +
                        pathElement.getTotalLength() +
                        ";animation-delay:" +
                        Math.random() * 3.5 +
                        "s",
                );
            },
        );
    });
</script>

<div aria-label="Trails">
    <svg
        version="1.1"
        baseProfile="basic"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="310.4px"
        height="56.5px"
        viewBox="0 0 310 70"
        xml:space="preserve"
    >
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#00bc9b" />
                <stop offset="100%" stop-color="#5eaefd" />
            </linearGradient>
        </defs>

        <g class="haze-paths" transform="translate (5,5)">
            <path
                class="haze-path"
                fill="none"
                stroke="#000000"
                d="M14.4,13.1H0V0.8h44.9v12.3H30.5v43.4H14.4V13.1z"
            />
            <path
                class="haze-path"
                fill="none"
                stroke="#000000"
                d="M58.2,0.8H80c14.6,0,22.7,5.9,22.7,17.7v0.3c0,8-4.2,12.4-10.1,14.7L106,56.5H89.1l-11.3-20
		h-3.7v20H58.2V0.8z M79.2,26.2c5.4,0,8-2.3,8-6.8v-0.3c0-4.5-2.8-6.3-8-6.3h-5.2v13.4H79.2z"
            />
            <path
                class="haze-path"
                fill="none"
                stroke="#000000"
                d="M132.3,0.8h20.7l17.7,55.8h-16.9l-3-10.4h-18.5l-3,10.4h-14.9L132.3,0.8z M135.4,35.2h12.2
		l-6.1-21.4L135.4,35.2z"
            />
            <path
                class="haze-path"
                fill="none"
                stroke="#000000"
                d="M183.6,0.8h16.1v55.8h-16.1V0.8z"
            />
            <path
                class="haze-path"
                fill="none"
                stroke="#000000"
                d="M216.9,0.8H233v43.4h21.1v12.4h-37.1V0.8z"
            />
            <path
                class="haze-path"
                fill="none"
                stroke="#000000"
                d="M263.9,38.8h15.2c0.4,4,2.2,7.3,8.8,7.3c4.6,0,7.2-2.3,7.2-5.5c0-3.4-2.1-4.4-8.8-5.4
		c-15.8-1.9-21.1-6.6-21.1-17.8c0-10.1,8.3-17.4,21.6-17.4c13.4,0,21,5.6,22,17.4H294c-0.5-4-2.8-6-7.2-6c-4.3,0-6.5,1.9-6.5,4.8
		c0,3.1,1.7,4.5,8.7,5.5c14.1,1.6,21.4,5.2,21.4,17.3c0,10.2-8.1,18.6-22.5,18.6C272.3,57.5,264.4,50.9,263.9,38.8z"
            />
        </g>

        <g class="top-paths" transform="translate (5,5)">
            <path
                fill="none"
                stroke="#000000"
                d="M14.4,13.1H0V0.8h44.9v12.3H30.5v43.4H14.4V13.1z"
            />
            <path
                fill="none"
                stroke="#000000"
                d="M58.2,0.8H80c14.6,0,22.7,5.9,22.7,17.7v0.3c0,8-4.2,12.4-10.1,14.7L106,56.5H89.1l-11.3-20
		h-3.7v20H58.2V0.8z M79.2,26.2c5.4,0,8-2.3,8-6.8v-0.3c0-4.5-2.8-6.3-8-6.3h-5.2v13.4H79.2z"
            />
            <path
                fill="none"
                stroke="#000000"
                d="M132.3,0.8h20.7l17.7,55.8h-16.9l-3-10.4h-18.5l-3,10.4h-14.9L132.3,0.8z M135.4,35.2h12.2
		l-6.1-21.4L135.4,35.2z"
            />
            <path
                fill="none"
                stroke="#000000"
                d="M183.6,0.8h16.1v55.8h-16.1V0.8z"
            />
            <path
                fill="none"
                stroke="#000000"
                d="M216.9,0.8H233v43.4h21.1v12.4h-37.1V0.8z"
            />
            <path
                fill="none"
                stroke="#000000"
                d="M263.9,38.8h15.2c0.4,4,2.2,7.3,8.8,7.3c4.6,0,7.2-2.3,7.2-5.5c0-3.4-2.1-4.4-8.8-5.4
		c-15.8-1.9-21.1-6.6-21.1-17.8c0-10.1,8.3-17.4,21.6-17.4c13.4,0,21,5.6,22,17.4H294c-0.5-4-2.8-6-7.2-6c-4.3,0-6.5,1.9-6.5,4.8
		c0,3.1,1.7,4.5,8.7,5.5c14.1,1.6,21.4,5.2,21.4,17.3c0,10.2-8.1,18.6-22.5,18.6C272.3,57.5,264.4,50.9,263.9,38.8z"
            />
        </g>
    </svg>
</div>

<style>
    .haze-path {
        stroke-linecap: round;
        stroke: url(#gradient);
        stroke-width: 8;
        stroke-linejoin: round;
        stroke-opacity: 0.3;
        fill: transparent;
        animation: dash 5s linear;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-direction: alternate;
    }

    @keyframes dash {
        to {
            stroke-dashoffset: 0;
        }
    }

    .top-paths path {
        stroke: rgba(117, 52, 8, 0.825);
        stroke-width: 2;
    }

</style>
