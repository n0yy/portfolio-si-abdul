import Image from "next/image";
import SocialMedia from "../SocialMedia";
import { ButtonPrimary } from "../Button";

export default function Jumbotron() {
  return (
    <section
      id="jumbotron"
      className="relative flex flex-col-reverse lg:flex-row justify-center items-center px-10 lg:px-0 mt-20 lg:mt-7"
    >
      <div className="absolute w-40 h-40 rounded-full bg-primary -z-50 top-40 lg:top-10 right-0 lg:right-40 blur-3xl"></div>
      <div className="absolute w-36 h-36 rounded-full bg-primary -z-50 bottom-0 right-auto blur-3xl"></div>
      <div className="w-full lg:w-5/12 mt-20 lg:mt-0">
        <Image
          src="/assets/img/abdul.png"
          width={420}
          height={500}
          alt="Ridwan Abdul Aziz"
          quality={100}
        />
      </div>
      <div className="w-full lg:w-4/12">
        <h1 className="text-3xl font-josefin font-semibold text-primary">
          Ridwan Abdul Aziz
        </h1>
        <p className="font-inter font-light text-gray-600 leading-6 tracking-wide mb-5">
          Nama saya Ridwan Abdul Azis, lahir di Jakarta tanggal 23 Maret 2002,
          beragama islam dan belum menukah. Saya memiliki kondisi kesehatan yang
          baik, dan saya memiliki motivasi tinggi dalam bekerja, saya juga
          memiliki komuni
        </p>
        <ButtonPrimary href="" name="Lihat CV" />
        <div className="border-t mt-10 border-primary/25">
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
