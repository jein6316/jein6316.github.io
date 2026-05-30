import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const steps = [
  { id: 1, label: '프로젝트 생성', status: 'completed' },
  { id: 2, label: '요구사항 관리', status: 'completed' },
  { id: 3, label: '시나리오 테스트', status: 'current' },
  { id: 4, label: '운영 배포', status: 'pending' },
];

const ITSMProgressUI: React.FC = () => {
  return (
    <div className="w-full bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 mt-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <svg className="w-24 h-24 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      </div>
      
      <h4 className="text-sm font-semibold text-blue-400 mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        ALM Workflow Dashboard (Live)
      </h4>
      
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-4 left-4 right-4 h-0.5 bg-slate-800">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '66%' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-blue-500"
          />
        </div>

        <div className="flex justify-between relative z-10">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center gap-3">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + (index * 0.2) }}
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-900 border-2 
                  ${step.status === 'completed' ? 'border-blue-500 text-blue-500' : 
                    step.status === 'current' ? 'border-emerald-400 text-emerald-400' : 
                    'border-slate-700 text-slate-700'}`}
              >
                {step.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : 
                 step.status === 'current' ? <Clock className="w-4 h-4 animate-spin-slow" /> : 
                 <Circle className="w-4 h-4" />}
              </motion.div>
              <span className={`text-xs font-medium ${
                step.status === 'completed' ? 'text-slate-300' : 
                step.status === 'current' ? 'text-emerald-400' : 'text-slate-600'
              }`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ITSMProgressUI;
