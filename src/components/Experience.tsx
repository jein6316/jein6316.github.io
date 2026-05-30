import React from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Experience</h2>
          <p className="text-slate-400 max-w-2xl">
            다양한 도메인(금융, 멤버십, 사내 시스템)에서의 구축 및 운영 경험을 바탕으로 
            비즈니스 가치를 극대화하는 솔루션을 제공해왔습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
