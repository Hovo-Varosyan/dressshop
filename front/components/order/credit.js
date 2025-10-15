"use client"
import clsx from "clsx/lite";

export default function Credit({ isFlipped, form }) {


    return (
        <div className="w-full lg:w-1/3 flex items-center justify-center">
            <div
                className={`relative w-80 h-48 perspective`}
                aria-hidden="true"
            >
                <div
                    className={clsx(isFlipped && "rotate-y-180", "transform-preserve duration-500 transition-ease relative w-full h-full ")}
                >
                    {/* FRONT */}
                    <div
                        className="absolute backface-hidden inset-0 rounded-2xl p-4 text-white"
                        style={{
                            background:
                                "linear-gradient(135deg,#1f2937 0%, #111827 100%)",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <div className="flex justify-between items-start">
                            <div className="text-sm text-gray-300">VISA</div>
                            <div className="text-xs text-gray-400">bank</div>
                        </div>

                        <div className="text-lg tracking-widest font-mono">
                            {form.cardNumber.padEnd(19, "•")}
                        </div>

                        <div className="flex justify-between items-center">
                            <div>
                                <div className="text-xs text-gray-400">Cardholder</div>
                                <div className="font-semibold">{(form.cardName || "CARDHOLDER NAME").toUpperCase()}</div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-400">Valid</div>
                                <div className="font-semibold">{form.cardExp || "MM/YY"}</div>
                            </div>
                        </div>
                    </div>

                    {/* BACK */}
                    <div
                        className="absolute inset-0 transform-preserve backface-hidden rounded-2xl p-4 text-white rotate-y-180"
                        style={{
                            transform: "rotateY(180deg)",
                            background:
                                "linear-gradient(135deg,#111827 0%, #0b1220 100%)",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <div className="bg-black h-8 rounded-sm w-full" />

                        <div className="mt-2">
                            <div className="bg-gray-700 h-8 rounded-sm w-40 ml-auto flex items-center justify-center">
                                <div className="text-black font-semibold">{form.cardCVV || "•••"}</div>
                            </div>
                            <div className="text-xs text-gray-400 mt-2">CVV</div>
                        </div>

                        <div className="text-xs text-gray-500">Contact: support@example.com</div>
                    </div>
                </div>
            </div>
        </div>

    )
}