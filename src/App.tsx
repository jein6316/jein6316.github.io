import Hero from './components/Hero';
import Experience from './components/Experience';
import SkillMatrix from './components/SkillMatrix';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 selection:bg-blue-500/30 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white font-bold text-xl tracking-tight flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-400 flex items-center justify-center">
              <span className="text-white text-sm">Dev</span>
            </div>
            Portfolio
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8 text-sm font-medium text-slate-300"
          >
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <Experience />
        <SkillMatrix />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800 bg-slate-900">
        <p>© {new Date().getFullYear()} Senior Developer Portfolio. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
