<div id="loader"
     style="position:absolute;z-index:999999;top:0;left:0;height:100vh;width:100vw; display:flex;align-items:center;justify-content:center;background:linear-gradient(45deg, var(--pink) -10%, var(--blue), var(--blue) )">
    <div style="text-align:center;color:#fff">
        <x-jasmine::bunny style="width: 80px;height:100px;position:relative;margin-bottom: -285px;"/>
        <svg width="200" height="200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
             style="display: block;margin: 2rem auto 1rem; stroke:#fff">
            <g>
                <circle cx="12" cy="12" r="9.5" fill="none" stroke-width="1" stroke-linecap="round">
                    <animate attributeName="stroke-dasharray" dur="1.5s" calcMode="spline"
                             values="0 150;42 150;42 150;42 150" keyTimes="0;0.475;0.95;1"
                             keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"/>
                    <animate attributeName="stroke-dashoffset" dur="1.5s" calcMode="spline" values="0;-16;-59;-59"
                             keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                             repeatCount="indefinite"/>
                </circle>
                <animateTransform attributeName="transform" type="rotate" dur="2s" values="0 12 12;360 12 12"
                                  repeatCount="indefinite"/>
            </g>
        </svg>
        <div style="margin-top:2rem">
            <span style="color:#fff">Tip:</span>
            <span style="color:#f5f5f5;font-weight:300">Try <span style=" color:#fff">Shift</span>+<span
                        style=" color:#fff">R</span> to refresh quicker</span>
        </div>
    </div>
</div>
