import React, { useState } from 'react';
import { ACCEPTED_ITEMS } from '../data/content';
import { CheckCircle2, XCircle, Sparkles, AlertTriangle } from 'lucide-react';

export const AcceptedItemsGuide: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'accepted' | 'not_accepted'>('all');

  const filteredItems = ACCEPTED_ITEMS.filter((item) => {
    if (filter === 'accepted') return item.accepted;
    if (filter === 'not_accepted') return !item.accepted;
    return true;
  });

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-soft">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-forest-800 bg-forest-50 border border-forest-200/60 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-forest-600" />
            <span>Sorting Guidelines</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What Can Be Donated?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
            We accept a wide spectrum of wearable everyday apparel, paired shoes, and household textiles. Review our straightforward guidelines below before packing.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center p-1.5 rounded-xl bg-slate-100/90 border border-slate-200/60 self-start md:self-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              filter === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setFilter('accepted')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              filter === 'accepted'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-emerald-700'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Accepted</span>
          </button>
          <button
            onClick={() => setFilter('not_accepted')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
              filter === 'not_accepted'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-rose-700'
            }`}
          >
            <XCircle className="w-4 h-4" />
            <span>Cannot Accept</span>
          </button>
        </div>
      </div>

      {/* Grid items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`p-5 rounded-2xl border transition-all ${
              item.accepted
                ? 'bg-forest-50/40 border-emerald-200/70 hover:bg-forest-50/70 hover:border-emerald-300'
                : 'bg-rose-50/30 border-rose-200/70 hover:bg-rose-50/60 hover:border-rose-300'
            }`}
          >
            <div className="flex items-start gap-3.5">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  item.accepted
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-rose-100 text-rose-700'
                }`}
              >
                {item.accepted ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <XCircle className="w-5 h-5" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                  <span
                    className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                      item.accepted
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {item.accepted ? 'Accepted' : 'No'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Useful practical packing tip callout */}
      <div className="mt-8 p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-4">
        <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div className="text-xs sm:text-sm text-amber-900">
          <p className="font-bold">Pro-Tip for Donors & Drive Coordinators:</p>
          <p className="mt-0.5 text-amber-800/90 leading-relaxed">
            Please place all donations into sturdy standard plastic trash bags (13 to 30-gallon) and tie them securely. This protects fabrics against outdoor moisture and ensures easy weighing and handling during our collection route.
          </p>
        </div>
      </div>
    </div>
  );
};
