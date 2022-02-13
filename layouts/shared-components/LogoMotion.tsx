import { FC, useMemo } from "react"
interface ISVGProps {
  width?: number,
  fill?: string
  stroke?: string
}
const LogoMotion: FC<ISVGProps> = ({ width = 150, fill = '#064946', stroke = '#000000' }) => {
  const heigth = width * 43 / 150
  const style = useMemo(() => {
    return {
      fill,
      stroke,
      fillOpacity: '1',
      strokeWidth: '0.3',
      strokeMiterlimit: '4',
      strokeDasharray: 'none'
    }
  }, [])
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="svg8" version="1.1" viewBox="0 0 55.562498 15.875" height={heigth} width={width}>
      <g transform="translate(0,-281.12498)" id="layer1">
        <path 
          d="m 9.0998518,296.12907 c -0.2282588,-0.0692 -0.3932062,-0.20285 -0.5085563,-0.41212 -0.1057858,-0.19193 -0.1105833,-0.29304 -0.1353131,-2.85192 -0.027783,-2.87471 -0.02514,-2.90776 0.2559741,-3.20118 0.079891,-0.0834 0.2275252,-0.17876 0.3280754,-0.21195 0.3893186,-0.12849 0.5042976,-0.0772 2.9102731,1.29825 2.595032,1.48352 2.580006,1.47178 2.580006,2.01517 0,0.53689 -5.6e-4,0.53735 -2.447592,1.96254 -1.186786,0.69121 -2.2530764,1.30011 -2.3695343,1.35311 -0.2249843,0.10239 -0.3911735,0.11542 -0.6133329,0.0481 z m -3.2164821,-3.96603 c -0.6506734,-0.37336 -1.2041459,-0.71217 -1.229939,-0.75291 -0.069302,-0.10945 -0.058419,-0.43846 0.017652,-0.53362 0.036393,-0.0455 0.5836637,-0.38358 1.216157,-0.75122 1.2636782,-0.73452 1.400745,-0.77916 1.6331305,-0.53188 l 0.1283322,0.13656 v 1.42945 1.42944 l -0.1485243,0.12793 c -0.081688,0.0704 -0.2127037,0.12729 -0.291145,0.12651 -0.084031,-8e-4 -0.6286205,-0.2803 -1.3256634,-0.68026 z m -4.13751,-1.07842 c -0.096251,-0.0655 -0.2248334,-0.18634 -0.2857394,-0.26853 -0.108619,-0.14656 -0.1107381,-0.19638 -0.1107381,-2.60315 0,-2.39566 0.00258,-2.45718 0.1091417,-2.59995 0.1931748,-0.25881 0.3730092,-0.3584 0.6471758,-0.3584 0.2333108,0 0.4142692,0.0914 2.2367318,1.12986 1.0905861,0.62142 2.0387443,1.17984 2.1070183,1.24093 0.364058,0.32575 0.364058,0.84986 0,1.17466 -0.100411,0.0896 -3.5785509,2.12901 -3.9981768,2.34435 -0.1911975,0.0981 -0.5135608,0.0708 -0.7054133,-0.0598 z m 20.7727683,-0.0378 c -0.777975,-0.1669 -1.16584,-0.61702 -1.298131,-1.50648 -0.115471,-0.77637 0.09517,-1.56087 0.519348,-1.93425 0.286108,-0.25184 0.605037,-0.36667 1.134067,-0.40832 1.387438,-0.10925 2.113406,0.56622 2.110325,1.96353 -0.0021,0.97488 -0.33813,1.54843 -1.057882,1.80591 -0.279521,0.1 -1.097185,0.14624 -1.407727,0.0796 z m 1.037178,-0.83572 c 0.301819,-0.15077 0.423484,-0.45872 0.423484,-1.07186 0,-0.84287 -0.249895,-1.16431 -0.905309,-1.1645 -0.567198,-1.5e-4 -0.847165,0.32538 -0.883754,1.02761 -0.04633,0.88913 0.239153,1.29423 0.915629,1.29932 0.149863,10e-4 0.345046,-0.0382 0.44995,-0.0906 z m 15.925014,0.81677 c -0.439868,-0.0995 -0.780054,-0.3306 -0.981696,-0.66685 -0.22558,-0.37617 -0.29819,-0.75869 -0.268923,-1.41675 0.02151,-0.48367 0.04297,-0.57797 0.204884,-0.9005 0.140384,-0.27963 0.238227,-0.39859 0.437207,-0.53157 0.361873,-0.24185 0.616655,-0.30351 1.252311,-0.30309 0.670724,4e-4 0.999543,0.0977 1.338271,0.39587 0.42276,0.37212 0.627961,1.13939 0.517372,1.9345 -0.144404,1.03823 -0.654735,1.48615 -1.749771,1.53579 -0.254339,0.0115 -0.580244,-0.009 -0.749655,-0.0474 z m 1.159334,-0.86439 c 0.288876,-0.21533 0.357885,-0.41282 0.357885,-1.02424 0,-0.46533 -0.01771,-0.58595 -0.108733,-0.74091 -0.170026,-0.28944 -0.410671,-0.42368 -0.759297,-0.42359 -0.645737,1.6e-4 -0.922954,0.34995 -0.922954,1.1645 0,0.57061 0.144101,0.9217 0.441129,1.07481 0.252245,0.13001 0.786215,0.10279 0.99197,-0.0506 z m 2.634109,0.85807 c -0.244889,-0.0906 -0.42857,-0.29474 -0.503019,-0.55892 -0.02872,-0.1019 -0.05235,-0.69147 -0.05251,-1.31015 l -2e-4,-1.12488 h -0.211741 -0.211744 v -0.36751 -0.3675 l 0.224976,-0.0163 0.224976,-0.0163 0.0794,-0.58229 0.0794,-0.58229 0.383783,-0.0155 0.383782,-0.0155 v 0.61107 0.61108 h 0.317613 0.317612 v 0.36791 0.3679 l -0.30438,0.0159 -0.304378,0.0159 -0.0144,1.02678 c -0.01665,1.18689 -0.005,1.22298 0.393158,1.22298 h 0.230005 v 0.33842 c 0,0.38986 -0.0065,0.39543 -0.502234,0.43335 -0.206417,0.0158 -0.392679,-0.003 -0.530008,-0.054 z m 4.55245,0.026 c -0.405904,-0.0876 -0.662333,-0.22604 -0.891937,-0.48141 -0.320586,-0.35657 -0.430272,-0.72033 -0.430272,-1.42694 0,-0.70855 0.109474,-1.07013 0.432921,-1.42988 0.346901,-0.38584 0.67121,-0.49748 1.445111,-0.49748 0.728861,0 1.084415,0.11278 1.423029,0.4514 0.345517,0.34551 0.450176,0.68865 0.450176,1.47596 0,0.56031 -0.01815,0.70774 -0.118458,0.9622 -0.153879,0.39036 -0.461046,0.6955 -0.845484,0.8399 -0.336077,0.12623 -1.111931,0.1825 -1.465086,0.10625 z m 1.010172,-0.82881 c 0.09857,-0.0468 0.233179,-0.17183 0.299147,-0.27791 0.106493,-0.17125 0.119938,-0.26111 0.119938,-0.80163 0,-0.69689 -0.07293,-0.89311 -0.39619,-1.06595 -0.244227,-0.13059 -0.709404,-0.13115 -0.951816,-10e-4 -0.302982,0.16249 -0.398864,0.419 -0.398864,1.06709 0,0.65952 0.08838,0.89888 0.390961,1.05879 0.238933,0.12627 0.693254,0.13633 0.936824,0.0208 z m -17.907844,0.78448 -0.487679,-0.0152 -0.402891,-0.7656 c -0.221591,-0.42109 -0.418101,-0.76561 -0.436689,-0.76561 -0.01859,0 -0.135934,0.10024 -0.260773,0.22277 l -0.22698,0.22276 v 0.5448 0.5448 H 28.63761 28.16119 v -2.43503 -2.43503 h 0.475495 0.475495 l 0.01416,1.3082 0.01417,1.3082 0.603308,-0.72591 0.60331,-0.72591 h 0.55794 0.55794 l -0.132959,0.14557 c -0.07313,0.0801 -0.349668,0.39759 -0.614532,0.70561 l -0.481571,0.56003 0.550808,0.97156 c 0.302943,0.53436 0.571929,0.99269 0.597746,1.0185 0.0273,0.0273 0.08439,-0.0931 0.136422,-0.28761 0.04922,-0.184 0.322731,-1.21593 0.607812,-2.29316 l 0.518328,-1.95861 h 0.624704 0.624704 l 0.417704,1.61453 c 0.229735,0.88799 0.431961,1.72837 0.449387,1.86752 0.04341,0.3466 0.103401,0.35662 0.145674,0.0243 0.01941,-0.15252 0.221098,-1.00385 0.448211,-1.89184 l 0.412933,-1.61453 h 0.493607 0.493607 l 0.625546,2.35562 c 0.34405,1.2956 0.62566,2.38541 0.625802,2.4218 2e-4,0.0477 -0.12439,0.0662 -0.447206,0.0662 h -0.447463 l -0.04736,-0.17204 c -0.08311,-0.30186 -0.745359,-3.12803 -0.784575,-3.34817 l -0.03772,-0.21174 -0.06085,0.31761 c -0.03346,0.17469 -0.226002,1.01424 -0.427859,1.86567 l -0.367015,1.54805 -0.618425,4e-4 c -0.543113,2e-4 -0.621857,-0.011 -0.646602,-0.0923 -0.09237,-0.30366 -0.732776,-3.10005 -0.757685,-3.30846 -0.01653,-0.1383 -0.04748,-0.25145 -0.06879,-0.25145 -0.02131,0 -0.05418,0.11315 -0.07305,0.25145 -0.03596,0.26356 -0.74964,3.3433 -0.781473,3.37226 -0.03272,0.0298 -1.010681,0.0557 -1.511813,0.0401 z m -15.662962,-2.43336 -0.640553,-2.42151 0.528343,-0.0152 c 0.290589,-0.008 0.535238,-0.008 0.543663,1.6e-4 0.02818,0.0282 0.755505,3.18755 0.793757,3.44792 0.03854,0.26236 0.127489,0.25151 0.129162,-0.0158 6.6e-4,-0.10502 0.541958,-2.45533 0.747764,-3.24676 l 0.05205,-0.20016 0.617181,0.0149 0.617181,0.0149 0.278223,1.16458 c 0.153023,0.64052 0.340547,1.46222 0.416721,1.82601 0.07617,0.36378 0.146127,0.66905 0.155452,0.67838 0.0093,0.009 0.04484,-0.14539 0.07891,-0.34382 0.03408,-0.19842 0.223153,-1.02775 0.42017,-1.84296 l 0.358212,-1.48219 0.458631,-0.0153 c 0.347533,-0.0116 0.458246,10e-4 0.45704,0.0529 -8.8e-4,0.0375 -0.283332,1.12826 -0.627681,2.42385 l -0.626088,2.35563 -0.560852,0.015 -0.560851,0.015 -0.05238,-0.20027 c -0.462354,-1.76777 -0.797593,-3.10894 -0.827293,-3.30969 -0.03654,-0.247 -0.131898,-0.30321 -0.130324,-0.0768 4.2e-4,0.0638 -0.192711,0.89612 -0.429232,1.84962 l -0.430039,1.73363 -0.563308,-2e-4 -0.563307,-2e-4 -0.640554,-2.42151 z m 10.301275,0.56934 v -1.85274 h 0.390842 c 0.424763,0 0.453545,0.0237 0.455402,0.37496 0.0012,0.22599 0.06054,0.21721 0.218816,-0.0324 0.18206,-0.28708 0.430016,-0.448 0.690715,-0.44826 0.349102,-4e-4 0.361642,0.017 0.361642,0.501 v 0.43693 l -0.325715,0.0295 c -0.343706,0.0312 -0.51335,0.12186 -0.703254,0.37596 -0.101092,0.13526 -0.110391,0.23165 -0.126077,1.30688 l -0.01695,1.16084 h -0.472713 -0.472718 z m 19.374377,0 v -1.85274 h 0.502886 0.502887 v 1.85274 1.85274 h -0.502887 -0.502886 z m 5.92877,0 v -1.85274 h 0.390843 c 0.420939,0 0.453389,0.0255 0.455404,0.35732 10e-4,0.16039 0.05742,0.15001 0.242262,-0.0446 0.330343,-0.34773 0.881851,-0.49479 1.383065,-0.3688 0.324567,0.0816 0.567953,0.26752 0.718277,0.54875 0.113484,0.21231 0.119348,0.28661 0.135534,1.71734 l 0.01693,1.49542 h -0.480103 -0.480104 l -4e-4,-1.17781 c -1.6e-4,-0.66332 -0.02471,-1.26573 -0.05618,-1.37908 -0.146738,-0.52842 -0.95041,-0.54376 -1.267194,-0.0242 -0.09681,0.15877 -0.105205,0.26849 -0.105387,1.3768 l -1.77e-4,1.20428 h -0.476427 -0.476419 z m -40.204478,-0.11218 c -0.465832,-0.26534 -0.8886541,-0.51908 -0.9396046,-0.56386 -0.05095,-0.0448 -0.092637,-0.14798 -0.092637,-0.22933 0,-0.18717 0.1122909,-0.27212 1.1418906,-0.8639 0.705802,-0.40567 0.81379,-0.45247 0.936385,-0.40586 0.07622,0.029 0.163846,0.0999 0.19473,0.15761 0.03409,0.0637 0.05615,0.51182 0.05615,1.14065 0,0.96514 -0.0072,1.04293 -0.105871,1.14159 -0.05823,0.0582 -0.159468,0.1058 -0.224975,0.10571 -0.06551,-1.1e-4 -0.50024,-0.21726 -0.966072,-0.48261 z m -4.8123581,-2.61189 c -0.8550167,-0.49643 -1.2346932,-0.74602 -1.2871479,-0.84614 -0.092823,-0.17716 -0.047812,-0.40501 0.1073111,-0.54322 0.1056773,-0.0942 1.8914732,-1.14967 2.2973179,-1.35785 0.2460387,-0.12621 0.4733906,-0.1106 0.6270261,0.043 0.1286625,0.12866 0.130062,0.1407 0.1431667,1.23075 0.023381,1.94487 0.025984,1.89922 -0.116963,2.05137 -0.2471985,0.26314 -0.4183176,0.20728 -1.7707109,-0.57794 z m 3.1621078,0.57292 c -0.1113699,-0.0388 -0.2065033,-0.0709 -0.2114072,-0.0713 -0.0049,-4e-4 -0.058501,-0.081 -0.1191049,-0.17909 -0.1067655,-0.17275 -0.1101883,-0.24333 -0.1101883,-2.27216 v -2.09387 l 0.13624,-0.16192 c 0.1700129,-0.20204 0.4809499,-0.30479 0.6957715,-0.2299 0.2247888,0.0784 3.4080962,1.90662 3.5489922,2.03828 0.197101,0.18418 0.247498,0.47519 0.128389,0.74136 -0.09615,0.21485 -0.174164,0.26721 -1.841712,1.23605 -0.957721,0.55643 -1.8050255,1.02325 -1.8828997,1.03737 -0.077875,0.0141 -0.2327108,-0.006 -0.3440806,-0.0448 z m 36.0418513,-0.55037 c -0.163144,-0.27957 -0.274221,-0.53023 -0.264676,-0.59726 0.01546,-0.10871 0.04762,-0.11643 0.545798,-0.13099 0.652849,-0.0191 0.768897,0.006 0.763471,0.16205 -0.0064,0.18584 -0.534886,1.01552 -0.65793,1.03298 -0.08298,0.0118 -0.165623,-0.088 -0.386663,-0.46678 z"
          style={style}
        />
      </g>
    </svg>
  )
}

export default LogoMotion