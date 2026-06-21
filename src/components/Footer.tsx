import { Code2, Heart, Linkedin, Github, BookOpen } from 'lucide-react';

const iconMap: Record<string, typeof Linkedin> = {
  Linkedin: Linkedin,
  Github: Github,
  BookOpen: BookOpen,
};

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anoop-gangwar-4b2b16253/', icon: 'Linkedin' },
  { name: 'GitHub', url: 'https://github.com/anoopgangwar4', icon: 'Github' },
  { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/gangwarg27z', icon: 'BookOpen' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="container-custom mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-brand-400" />
            <span className="text-lg font-bold gradient-text">Anoop Gangwar</span>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || Linkedin;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-500/30 transition-all"
                  aria-label={link.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-sm text-slate-500 flex items-center justify-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Anoop Gangwar
          </p>
          <p className="text-xs text-slate-600 mt-2">
            MERN Stack Developer | Next.js | AWS | AI-Powered Web Apps
          </p>
        </div>
      </div>
    </footer>
  );
}
