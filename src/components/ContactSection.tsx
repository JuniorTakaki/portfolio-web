import 'remixicon/fonts/remixicon.css';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
          <div>
            <h2 className="text-2xl font-bold font-mono mb-4 text-purple-700">Contact</h2>
            <div className="flex gap-5 mt-6 text-2xl">
              <a
                href="https://www.linkedin.com/in/junior-takaki/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-transform hover:scale-110">
                <i className="ri-linkedin-line"></i>
              </a>
              <a
                href="https://www.instagram.com/takako.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition-transform hover:scale-110">
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://github.com/JuniorTakaki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100 transition-transform hover:scale-110">
                <i className="ri-github-line"></i>
              </a>
              <a
                href="https://wa.me/+5511951068980"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-500 transition-transform hover:scale-110">
                <i className="ri-whatsapp-line"></i>
              </a>
              <a
                href="mailto:juniortakaki10@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20Contato&body=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500 transition-transform hover:scale-110">
                <i className="ri-mail-line"></i>
              </a>
            </div>
          </div>

          {/* Se quiser incluir outras colunas de navegação no futuro */}
          {/*<div>
            <h3 className="text-lg font-semibold text-purple-400">Links</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <a href="#" rel="noopener noreferrer">Projects</a>
            </ul>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
