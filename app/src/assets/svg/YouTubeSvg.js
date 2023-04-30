const YouTubeSvg = ({
    width,
    height,
    color
}) => (
    // <svg
    //     id="Layer_1"
    //     dataname="Layer 1"
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 122.88 86.43"
    //     width={width}
    //     height={height}
    //     fill={color}
    // >
    //     <defs><style>{`.cls-1yt,.ccls-2yt{fill-rule:evenodd;}.ccls-2yt{fill:#fff;}`}</style></defs>
    //     <path className="cls-1yt" d="M121.63,18.65s-1.2-8.47-4.9-12.19c-4.67-4.89-9.91-4.92-12.31-5.21C87.24,0,61.43,0,61.43,0h0s-25.8,0-43,1.25c-2.4.29-7.63.31-12.31,5.21C2.4,10.18,1.22,18.65,1.22,18.65A187.15,187.15,0,0,0,0,38.55v9.31a187.65,187.65,0,0,0,1.22,19.9S2.42,76.23,6.09,80c4.68,4.9,10.82,4.74,13.57,5.26,9.83.94,41.78,1.22,41.78,1.22s25.83,0,43-1.27c2.41-.29,7.64-.32,12.32-5.21,3.69-3.72,4.89-12.2,4.89-12.2a187.15,187.15,0,0,0,1.22-19.9V38.54a189.26,189.26,0,0,0-1.25-19.9Z"/>
    //     <polygon className="ccls-2yt" points="48.71 59.16 48.71 24.63 81.9 41.95 48.71 59.16 48.71 59.16"/>
    // </svg>

    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="2 4 20 16"
        width={width}
        height={height}
        fill={color}
    >
        <g>
            <path fill="none" d="M0 0h24v24H0z"/>
            <path fillRule="nonzero" d="M19.606 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.5 6 12 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592C4.285 7.419 4 9.196 4 12s.285 4.58.394 5.006c.076.297.292.522.538.59C5.372 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592C19.715 16.581 20 14.8 20 12s-.285-4.58-.394-5.005zm1.937-.497C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5v-7l6 3.5-6 3.5z"/>
        </g>
    </svg>

    // <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     xlinkHref="http://www.w3.org/1999/xlink"
    //     version="1.1"
    //     space="preserve"
    //     viewBox="18.34 0.5 475.31 511"
    //             width={width}
    //         height={height}
    //         fill={color}
    // >
    //     <g id="7935ec95c421cee6d86eb22ecd1368a9">
    //         <path
    //             style={{ display: "inline" }}
    //             d="M34.354,0.5h45.959l29.604,91.096h2.863L141.013,0.5h46.353l-53.107,133.338v94.589H88.641V138.08 L34.354,0.5z M192.193,98.657c0-13.374,5.495-24.003,16.493-31.938c10.984-7.934,25.749-11.901,44.3-11.901   c16.893,0,30.728,4.192,41.506,12.55c10.805,8.358,16.193,19.112,16.193,32.287v89.2c0,14.771-5.301,26.373-15.868,34.782   c-10.579,8.408-25.151,12.625-43.684,12.625c-17.859,0-32.143-4.342-42.866-13.024c-10.709-8.683-16.074-20.36-16.074-35.057   V98.657z M234.205,191.424c0,4.766,1.44,8.409,4.354,11.029c2.907,2.595,7.055,3.867,12.451,3.867c5.532,0,9.93-1.297,13.18-3.942   c3.256-2.669,4.891-6.313,4.891-10.954V97.359c0-3.768-1.672-6.812-4.99-9.132c-3.318-2.321-7.679-3.494-13.081-3.494   c-4.972,0-9.027,1.173-12.133,3.494c-3.119,2.32-4.672,5.364-4.672,9.132V191.424z M459.992,57.588v172.711h-40.883v-19.063   c-7.547,7.037-15.381,12.375-23.541,16.069c-8.146,3.643-16.068,5.489-23.729,5.489c-9.455,0-16.592-2.57-21.383-7.71   c-4.791-5.141-7.186-12.85-7.186-23.13V57.588h40.895v132.39c0,4.117,0.861,7.061,2.57,8.907c1.723,1.822,4.492,2.745,8.322,2.745   c3.018,0,6.824-1.223,11.4-3.643c4.604-2.42,8.82-5.514,12.65-9.282V57.588H459.992z M421.68,363.262   c-2.008-2.221-5.203-3.368-9.594-3.368c-4.59,0-7.883,1.147-9.879,3.368c-1.996,2.245-2.994,5.963-2.994,11.153v10.754h25.473   v-10.754C424.686,369.225,423.688,365.507,421.68,363.262z M300.855,444.228c2.195,0.898,4.516,1.322,6.961,1.322   c3.543,0,6.113-0.849,7.785-2.595c1.67-1.722,2.494-4.591,2.494-8.533v-62.178c0-4.191-1.023-7.36-3.068-9.531   c-2.059-2.171-5.064-3.244-8.957-3.244c-2.059,0-4.092,0.399-6.102,1.198c-2.008,0.823-3.991,2.096-5.95,3.792v75.402   C296.364,441.907,298.646,443.354,300.855,444.228z M490.496,312.587c0-29.941-30.754-54.219-68.654-54.219   c-54.068-1.822-109.396-2.62-165.842-2.521c-56.427-0.1-111.756,0.698-165.843,2.521c-37.881,0-68.633,24.277-68.633,54.219   c-2.277,23.678-3.263,47.381-3.175,71.085c-0.087,23.703,0.898,47.406,3.175,71.11c0,29.916,30.752,54.192,68.633,54.192   c54.087,1.797,109.416,2.596,165.843,2.521c56.446,0.075,111.774-0.724,165.842-2.521c37.9,0,68.654-24.276,68.654-54.192   c2.27-23.704,3.254-47.407,3.154-71.11C493.75,359.968,492.766,336.265,490.496,312.587z M121.251,463.465v1.797H88.778v-1.797   V321.644H55.182v-1.771v-22.605v-1.771h99.672v1.771v22.605v1.771h-33.603V463.465z M236.768,341.33v122.135v1.797h-28.831v-1.797   v-11.901c-5.327,5.064-10.848,8.882-16.592,11.527c-5.757,2.619-11.334,3.942-16.748,3.942c-6.662,0-11.684-1.847-15.065-5.515   c-3.387-3.692-5.078-9.231-5.078-16.617v-1.797V341.33v-1.772h28.844v1.772v93.216c0,2.92,0.599,5.065,1.802,6.363   c1.217,1.322,3.175,1.971,5.876,1.971c2.127,0,4.803-0.873,8.047-2.595c3.231-1.747,6.2-3.967,8.914-6.662V341.33v-1.772h28.831   V341.33z M347.775,370.847v66.943v1.797c0,8.808-2.258,15.544-6.773,20.235c-4.518,4.641-11.055,6.986-19.588,6.986   c-5.639,0-10.652-0.898-15.07-2.695c-4.428-1.821-8.532-4.616-12.325-8.384v7.735v1.797h-29.105v-1.797V297.267v-1.771h29.105   v1.771v52.297c3.893-3.793,8.009-6.662,12.376-8.608c4.379-1.971,8.809-2.969,13.273-2.969c9.107,0,16.094,2.645,20.896,7.935   c4.803,5.289,7.211,12.999,7.211,23.13V370.847z M454.365,374.64v29.767v1.797h-55.152v21.581c0,6.513,0.947,11.029,2.844,13.549   c1.908,2.521,5.152,3.793,9.742,3.793c4.779,0,8.135-1.073,10.043-3.219c1.896-2.121,2.844-6.837,2.844-14.123v-6.811v-1.796h29.68   v1.796v7.51v1.796c0,12.7-3.605,22.257-10.84,28.694c-7.225,6.438-18.016,9.631-32.375,9.631c-12.912,0-23.066-3.418-30.49-10.229   c-7.41-6.812-11.127-16.193-11.127-28.096v-1.796V374.64v-1.771c0-10.754,4.078-19.512,12.213-26.299   c8.146-6.762,18.689-10.155,31.588-10.155c13.199,0,23.328,3.144,30.416,9.406c7.061,6.264,10.615,15.296,10.615,27.048V374.64z"
    //         />
    //     </g>
    // </svg>

    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="84.16 80.81 790.98 798.98"
    //         width={width}
    //     height={height}
    //     fill={color}
    // >
    // <path d="M457.833 409.589C428.769 401.499 435.461 454.433 433.863 472.11C438.257 485.793 428.969 552.31 452.24 541.624C487.985 525.132 518.132 501.177 549.263 476.985C556.149 471.633 555.328 460.859 547.876 456.329C518.431 438.428 491.544 417.974 457.833 409.589ZM373.937 272.959C539.131 269.464 772.339 219.826 759.156 461.624C777.233 677.054 622.227 665.868 461.628 665.169C343.675 666.967 225.323 668.665 235.51 515.356C231.316 401.698 225.623 276.954 373.937 272.959Z" fill="white"/>
    // <path d="M365.646 84.396C527.744 84.9952 748.867 45.4447 842.351 215.232C876.208 280.251 869.616 355.757 873.112 426.768C875.209 489.989 876.608 553.21 872.513 616.231C844.048 851.038 723.399 881.899 511.065 879.502C422.575 881.699 333.586 871.113 248.193 848.041C152.912 828.766 94.8849 738.478 90.3905 645.395C83.599 494.284 66.9198 297.23 146.52 163.497C196.258 94.2836 288.343 92.4859 365.646 84.396ZM759.254 461.624C772.338 219.827 539.229 269.465 373.936 272.96C225.522 276.955 231.314 401.699 235.509 515.357C225.422 668.766 343.674 666.968 461.626 665.17C622.226 665.969 777.332 677.055 759.254 461.624Z" fill="#000000"/>
    // <path d="M433.859 472.113C435.457 454.435 428.766 401.402 457.829 409.591C491.542 417.977 518.359 438.432 547.844 456.334C555.304 460.863 556.132 471.647 549.241 477.002C518.117 501.189 487.975 525.138 452.236 541.626C428.966 552.313 438.254 485.796 433.859 472.113Z" fill="#000000"/>
    // </svg>
);

export default YouTubeSvg;
