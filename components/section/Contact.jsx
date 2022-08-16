import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-primary w-full min-h-screen flex items-center justify-center"
    >
      <div className="w-full lg:w-1/3 px-10 lg:px-0">
        <h1 className="text-3xl font-josefin text-white font-semibold">
          Anda bisa menghubungi saya melalui
        </h1>
        <div className="flex items-center space-x-2 mt-5">
          <span className="p-3 bg-gray-200 flex items-center justify-center w-14 rounded-full shadow-xl">
            <Image src="/assets/icons/wa.png" width={30} height={30} alt="WA" />
          </span>
          <div className="font-josefin -space-y-1.5">
            <h6 className=" text-white/75">WhatsApp</h6>
            <p className="text-white">+628-1234-6901</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-5">
          <span className="p-3 bg-gray-200 flex items-center justify-center w-14 rounded-full shadow-xl">
            <Image
              src="/assets/icons/gmail.png"
              width={30}
              height={30}
              alt="WA"
            />
          </span>
          <div className="font-josefin -space-y-1.5">
            <h6 className=" text-white/75">Gmail</h6>
            <p className="text-white">adbulisme32@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-10 border-t py-5">
          <span className="mr-3">
            <Image
              src="/assets/logo/location.png"
              width={30}
              height={30}
              alt="WA"
            />
          </span>
          <div className="font-josefin -space-y-1.5 w-1/2">
            <p className="text-start text-white/75 text-lg">
              Jl. Jalan kemana kek, Kota Depok
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
    </section>
  );
}
