import Image from "next/image";

export default function Experience() {
  return (
    <section id="exp" className="my-40 block lg:flex">
      <div className="w-full lg:w-6/12 relative">
        <div className="hidden lg:absolute -z-50 bottom-40 left-20 w-72 h-72 rounded-full bg-primary blur-3xl animate-pulse"></div>
        <div className="hidden lg:absolute -z-50 bottom-28 right-0 w-36 h-36 rounded-full bg-primary/50 blur-2xl animate-bounce"></div>
        <header className="py-4 bg-primary w-3/4 lg:w-1/2 px-16 rounded-r-full shadow-lg mb-10">
          <h1 className="text-end uppercase text-xl font-josefin text-white font-semibol my-auto">
            pendidikan
          </h1>
        </header>
        <div className="flex px-10">
          <div className="flex flex-col justify-around mr-3">
            <span>2008</span>
            <span>2014</span>
            <span>2017</span>
          </div>
          <ul className="space-y-5 border-l border-primary pl-5">
            <li>
              <h3 className="font-josefin text-primary -mb-1">Sekolah Dasar</h3>
              <p className="text-2xl font-inter text-gray-700">
                SDN Kalisari 08 Petang
              </p>
            </li>
            <li>
              <h3 className="font-josefin text-primary -mb-1">
                Sekolah Menengah Pertama
              </h3>
              <p className="text-2xl font-inter text-gray-700">
                SMP Negeri 102 Jakarta
              </p>
            </li>
            <li>
              <h3 className="font-josefin text-primary -mb-1">Sekolah Dasar</h3>
              <p className="text-2xl font-inter text-gray-700">
                SMK PGRI 1 Jakarta
              </p>
              <span className="text-gray-500">Akuntansi & Lembaga</span>
            </li>
          </ul>
          <div className="mt-10 flex flex-col items-end ml-20 lg:block">
            <span className="hidden lg:block">
              <Image
                src="/assets/img/image1.png"
                width={150}
                height={80}
                alt="Image 1"
              />
            </span>
            <span className="hidden lg:block">
              <Image
                src="/assets/img/image2.png"
                width={240}
                height={150}
                alt="Image 2"
              />
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-6/12 flex flex-col items-end mt-40">
        <header className="py-4 bg-primary w-3/4 lg:w-1/2 px-16 rounded-l-full shadow-lg mb-10">
          <h1 className="text-end uppercase text-xl font-josefin text-white font-semibol my-auto">
            Pengalaman
          </h1>
        </header>

        <div className="text-start px-10 w-11/12 lg:w-3/4 mt-5 border-t border-primary/50 pt-5 font-inter">
          <span className="bg-gray-800 px-3 py-1 text-white mb-1 inline-block">
            2019
          </span>
          <h3 className="text-primary -mb-1">
            Direktorat Pembekalan Angkutan AD
          </h3>
          <p className="text-xl text-gray-700">
            Magang selama 2 bulan, dengan Jobdesk :{" "}
          </p>
          <ul className="list-disc text-gray-500">
            <li>Menginput Surat Jalan</li>
            <li>Membuat Faktur Penjualan</li>
          </ul>
        </div>

        <div className="text-start px-10 w-11/12 lg:w-3/4 mt-5 border-t border-primary/50 pt-5 font-inter">
          <span className="bg-gray-800 px-3 py-1 text-white mb-1 inline-block">
            2019 - 2020
          </span>
          <h3 className="text-primary -mb-1">Organisasi Siswa Intra Sekolah</h3>
          <p className="text-xl text-gray-700">
            Ketua Organisasi Siswa Intra Sekolah
          </p>
          <div className="mt-10 flex flex-wrap items-end gap-2 lg:gap-3">
            <span className="hidden lg:block">
              <Image
                src="/assets/img/image3.png"
                width={160}
                height={220}
                alt="Image 3"
              />
            </span>
            <span className="hidden lg:block">
              <Image
                src="/assets/img/image4.png"
                width={215}
                height={120}
                alt="Image 4"
              />
            </span>
            <span className="hidden lg:block">
              <Image
                src="/assets/img/image5.png"
                width={300}
                height={140}
                alt="Image 5"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
