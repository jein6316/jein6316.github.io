import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const SkillMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Competencies</h2>
          <p className="text-slate-400 max-w-2xl">
            백엔드부터 프론트엔드까지, 프로젝트의 전체 라이프사이클을 리드할 수 있는 기술 스택을 보유하고 있습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Backend', 'Frontend', 'Database'].map((category, idx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl border border-slate-700/50"
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3 border-b border-slate-700/50 pb-4">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <motion.span 
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-slate-300 font-medium hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillMatrix;
