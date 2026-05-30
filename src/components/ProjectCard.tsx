import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/portfolioData';
import ITSMProgressUI from './ITSMProgressUI';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isFeatured = project.isFeatured;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass rounded-2xl p-8 flex flex-col h-full group hover:bg-slate-800/80 transition-colors ${
        isFeatured ? 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-800/80 to-slate-900/80' : ''
      }`}
    >
      <div className="mb-4">
        <h3 className={`font-bold text-white mb-1 ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
          {project.title}
        </h3>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium mb-3">
          <span className="text-blue-400">{project.subtitle}</span>
          {project.period && (
            <>
              <span className="text-slate-600">•</span>
              <span className="text-slate-500 font-mono">{project.period}</span>
            </>
          )}
        </div>
      </div>
      
      <p className={`text-slate-400 mb-6 flex-grow ${isFeatured ? 'text-lg max-w-2xl' : 'text-sm'}`}>
        {project.description}
      </p>

      {isFeatured && project.id === 'lotte-itsm' && (
        <div className="mb-8">
          <ITSMProgressUI />
        </div>
      )}

      <div className="space-y-4 mt-auto">
        <div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Role</span>
          <p className="text-slate-300 text-sm">{project.role}</p>
        </div>
        
        <div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Key Features</span>
          <ul className="space-y-1">
            {project.features.map((feature, i) => (
              <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700/50">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
