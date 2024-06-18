import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col lg:flex-row  items-start lg:items-center justify-start gap-8 lg:gap-64 "
    >
      <div className="flex items-start flex-col max-w-[400px] gap-8">
        <div className="space-y-1">
          <h2 className="title text-left  ">Entre em contato com a gente!</h2>
          <p className="description text-left ">
            Se você está interessado em aprender Jiu-Jitsu, esclareceremos suas dúvidas, estamos
            localizados em Três Lagoas, prontos para ouvir você.
          </p>
        </div>
        <div>
          <Link
            target="_blank"
            href=" https://wa.me//556792769576?text=Quero%20agendar%20a%20minha%20aula%20de%20Jiu%20Jitsu"
          >
            <button className="btn-1 mt-auto">AGENDAR AULA!</button>
          </Link>
        </div>
      </div>

      <div className="flex items-start justify-center gap-8 ">
        <div className="flex items-start justify-start   gap-5 flex-col w-full">
          <Link
            target="_blank"
            href="https://www.google.com/maps/dir/-20.7935958,-51.7150546/bravus+jiu+jitsu/@-20.7856145,-51.7170865,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94909861800e5c29:0x1164755a8d3debb6!2m2!1d-51.6993147!2d-20.7818128?entry=ttu"
          >
            <div className="flex items-center justify-start gap-2 hover:underline underline-offset-4">
              <MapPin size={22} />{' '}
              <p className=" text-base lg:text-lg text-primary opacity-80">
                Av. Dr. Eloy Chaves, 1463
              </p>
            </div>
          </Link>

          <div className="flex items-center justify-start gap-2">
            <Phone size={22} />{' '}
            <p className=" text-base lg:text-lg text-primary opacity-80">(67) 9276-9576</p>
          </div>

          <div className="flex items-center justify-start gap-2">
            <Mail size={22} />{' '}
            <p className=" text-base lg:text-lg text-primary opacity-80">bravus@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
