import { useState } from "react";

export default function Login({ onNextStep }: { onNextStep: () => void }) {
  const [answer, setAnswer] = useState('');

  function handleClick() {
    if (answer.toLowerCase() !== 'яблучний') {
      alert('Невірна відповідь. Спробуй ще раз!');
      return;
    }

    onNextStep();
  }


  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative bg-gradient-to-b from-[#f5d0dc] to-[rgb(215,214,159)]"
      style={{ backgroundImage: 'url(https://i.pinimg.com/736x/14/90/44/14904482104afbf8cb9757540bbb5180.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >

      <div className="glassContainer">
        <h2 className="title mb-7">Який сирд я найчастіше п'ю?</h2>
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          type="text"
          className="w-full"
          name="answer"
          placeholder="..."
        />

        <button
          onClick={handleClick}
          className="mt-10"
        >
          Перевірити
        </button>
      </div>


      <GlassBall width="20vw" top="5%" left="17%" />
      <GlassBall width="45vw" top="45%" left="-14%" />
      <GlassBall width="35vw" top="60%" left="90%" />
      <GlassBall width="10vw" top="80%" left="55%" />
      <GlassBall width="55vw" top="25%" left="40%" />
      <GlassBall width="10vw" top="15%" left="90%" />
      <GlassBall width="8vw" top="10%" left="80%" />
      <GlassBall width="25vw" top="90%" left="30%" />


    </div>

  )
}

function GlassBall({ top, left, width }: { top?: string, left?: string, width?: string | number }) {
  return (
    <svg style={{ width, top, left, opacity: 1, position: 'absolute' }}
      width={width} viewBox="0 0 131 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <foreignObject x="-11.834" y="-4" width="142" height="132">
        <div
          style={{ backdropFilter: 'blur(2px)', clipPath: 'url(#bgblur_0_2005_8_clip_path)', height: '100%', width: '100%' }}>
        </div></foreignObject><g filter="url(#filter0_dii_2005_8)" data-figma-bg-blur-radius="4">
        <path d="M102.166 54C102.166 81.6142 79.7803 104 52.166 104C24.5518 104 2.16602 81.6142 2.16602 54C2.16602 26.3858 24.5518 4 52.166 4C79.7803 4 102.166 26.3858 102.166 54Z" fill="url(#paint0_linear_2005_8)" shapeRendering="crispEdges" />
      </g>
      <g filter="url(#filter1_f_2005_8)">
        <ellipse cx="24.2383" cy="35.6309" rx="7" ry="17.6378" transform="rotate(32.8822 24.2383 35.6309)" fill="white" />
      </g>
      <defs>
        <filter id="filter0_dii_2005_8" x="-11.834" y="-4" width="142" height="132" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="14" dy="10" />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2005_8" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2005_8" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="11" dy="8" />
          <feGaussianBlur stdDeviation="7.1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.72 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2005_8" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-14" dy="-8" />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.39 0" />
          <feBlend mode="normal" in2="effect2_innerShadow_2005_8" result="effect3_innerShadow_2005_8" />
        </filter>
        <clipPath id="bgblur_0_2005_8_clip_path" transform="translate(11.834 4)"><path d="M102.166 54C102.166 81.6142 79.7803 104 52.166 104C24.5518 104 2.16602 81.6142 2.16602 54C2.16602 26.3858 24.5518 4 52.166 4C79.7803 4 102.166 26.3858 102.166 54Z" />
        </clipPath><filter id="filter1_f_2005_8" x="0" y="7.33594" width="48.4766" height="56.5908" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="6.5" result="effect1_foregroundBlur_2005_8" />
        </filter>
        <linearGradient id="paint0_linear_2005_8" x1="17.7842" y1="30.0186" x2="88.2842" y2="89.0186" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>

  )
}