import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code2, Terminal, Database } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new opportunities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              풀스택 개발자
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            Java 기반 백엔드 개발을 중심으로, 화면 개발과 프론트엔드 연동까지 함께 수행해온 풀스택 개발자입니다. 
            다양한 프로젝트를 통해 회원, 금융, ITSM, 보증연장 등 여러 도메인의 비즈니스 요구사항을 
            안정적인 코드로 해결해 나가고 있습니다.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <a href="#experience" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
              프로젝트 보기
            </a>
            <a href="#skills" className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium transition-colors">
              기술 스택
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 w-full max-w-md relative hidden md:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-3xl blur-2xl" />
          <div className="relative glass rounded-3xl p-6 shadow-2xl border border-slate-700/50">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-4 font-mono text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Backend: Java, Spring</span>
              </div>
              <div className="flex items-center gap-3">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>Frontend: React, WebSquare</span>
              </div>
              <div className="flex items-center gap-3">
                <Database className="w-4 h-4 text-purple-400" />
                <span>DB & Infra: SQL, Server Ops</span>
              </div>
              <div className="mt-6 text-emerald-400">
                &gt; System initialized. Ready to build.
                <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#skills" className="text-slate-400 hover:text-white transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
