import Puzzle from "./Puzzle";

export default function Rules({ onNextStep }: { onNextStep: () => void }) {

    function handleClick() {
        onNextStep();
    }

    return (
        <div className="h-screen flex flex-col gap-5 justify-center items-center">
            <p className="text-lg text-center text-white">Перед тобою одне з наших найкращих фото.</p>
            <p className="text-lg text-center text-white">Але зараз воно розбите на шматочки.</p>
            <p className="text-lg text-center text-white">Склади його 😊</p>

            <div className="w-[90vw] h-[60vh] max-md:h-[40vh] overflow-hidden mx-auto relative">
                <img
                    className="w-full h-full object-contain absolute"
                    src="../../src/assets/gallery/5.jpg" />
            </div>

            <button onClick={handleClick}>Почнімо</button>
        </div>
    )
}
