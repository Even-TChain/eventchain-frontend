import React from 'react';
import { BudgetItem, formatCurrency, budgetCategories } from '@/lib/mockData';

interface BudgetBreakdownProps {
  budget: BudgetItem[];
  totalBudget: number;
}

const BudgetBreakdown: React.FC<BudgetBreakdownProps> = ({ budget, totalBudget }) => {
  const getCategoryInfo = (categoryName: string) => {
    return budgetCategories.find(c => c.name === categoryName) || { icon: '📦', name: categoryName };
  };

  return (
    <div className="space-y-3">
      {budget.map((item, index) => {
        const category = getCategoryInfo(item.category);
        const percentage = (item.amount / totalBudget) * 100;

        return (
          <div 
            key={item.id} 
            className="glass-card p-4 hover:border-primary/30 transition-all duration-300"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">{category.icon}</span>
                <div>
                  <p className="font-medium">{item.category}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display font-bold text-primary">
                  {formatCurrency(item.amount)} <span className="text-xs text-muted-foreground">USDC</span>
                </p>
                <p className="text-xs text-muted-foreground">{percentage.toFixed(1)}%</p>
              </div>
            </div>
            
            {/* Mini progress bar */}
            <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}

      {/* Total */}
      <div className="glass-card p-4 border-primary/30 bg-primary/5">
        <div className="flex justify-between items-center">
          <span className="font-display font-bold text-lg">Total Presupuesto</span>
          <span className="font-display font-bold text-2xl text-primary">
            {formatCurrency(totalBudget)} <span className="text-sm">USDC</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BudgetBreakdown;
