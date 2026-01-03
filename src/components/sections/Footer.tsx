import { ArrowUp, Instagram, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Whatsapp from "../../../public/whats.svg";
const Footer = () => {
  return (
    <footer className="flex px-4 py-8 items-start lg:items-center flex-col lg:flex-row justify-between gap-4 w-full max-w-[1200px] mx-auto ">
      <div className="flex items-center justify-between w-full ">
        <div className="space-y-1 text-xs md:text-sm">
          <p className="text-zinc-600">
            Desenvolvidoo por{" "}
            <Link target="_blank" href="https://matheusaltrao.dev/">
              <span className="text-primary hover:underline underline-offset-4">Matheus Altrão</span>
            </Link>
          </p>
          <p className="text-zinc-600">©️Todos os direitos reservados</p>
        </div>

        <div className=" items-center md:hidden flex gap-4">
          <Link
            target="_blank"
            href="https://www.google.com/maps/dir/-20.7935958,-51.7150546/bravus+jiu+jitsu/@-20.7856145,-51.7170865,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94909861800e5c29:0x1164755a8d3debb6!2m2!1d-51.6993147!2d-20.7818128?entry=ttu"
          >
            <MapPin size={20} />{" "}
          </Link>
          <Link href="">
            <Phone size={18} />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/bravus.academy/">
            <Instagram size={18} />
          </Link>
        </div>
      </div>

      <div className=" items-center  gap-4 hidden md:flex ">
        <div className="flex items-center  gap-2">
          <Link
            target="_blank"
            href="https://www.google.com/maps/dir/-20.7935958,-51.7150546/bravus+jiu+jitsu/@-20.7856145,-51.7170865,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94909861800e5c29:0x1164755a8d3debb6!2m2!1d-51.6993147!2d-20.7818128?entry=ttu"
          >
            <MapPin size={20} />{" "}
          </Link>
          <Link className="block w-5 h-5" target="_blank" href=" https://wa.me//556792769576?text=Estou%20interessado%20em%20fazer%20Jiu%20Jitsu">
            <Image src={Whatsapp} alt="WhatsApp Black Ops Jiu Jitsu" width={18} height={18} />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/bravus.academy/">
            <Instagram size={18} />
          </Link>
        </div>

        <a className="flex items-center hover:underline hover:underline-offset-4 gap-1 text-xs md:text-sm whitespace-nowrap" href="#hero">
          Voltar para o topo <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
