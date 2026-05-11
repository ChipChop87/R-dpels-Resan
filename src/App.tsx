import React, { useState } from 'react';
import { PawPrint, AlertTriangle, Baby, Heart, ShieldAlert, ChevronRight } from 'lucide-react';
import { STAGES, WARNINGS } from './data';
import './index.css';

type View = 'resan' | 'varningar' | 'barn';

const App: React.FC = () => {
  const [view, setView] = useState<View>('resan');
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  const renderResan = () => (
    <div className="container">
      <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
        Klicka på ett stadie för att läsa mer om din hunds utveckling.
      </p>
      {STAGES.map((stage) => (
        <div 
          key={stage.id} 
          className="card" 
          onClick={() => setSelectedStage(selectedStage === stage.id ? null : stage.id)}
          style={{ cursor: 'pointer' }}
        >
          <div className="stage-header">
            <div>
              <span className="age-badge">{stage.age}</span>
              <h2 style={{ marginTop: '0.5rem' }}>{stage.title}</h2>
            </div>
            <ChevronRight 
              size={20} 
              style={{ transform: selectedStage === stage.id ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}
            />
          </div>
          
          <p>{stage.summary}</p>

          {selectedStage === stage.id && (
            <div style={{ marginTop: '1.5rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
              <div className="section-title">Beteende & Utveckling</div>
              <p>{stage.behavior}</p>

              <div className="section-title">Vad du ska tänka på</div>
              <ul>
                {stage.ownerTips.map((tip, i) => <li key={i}>{tip}</li>)}
              </ul>

              <div className="section-title">Vanliga Utmaningar</div>
              <div style={{ background: '#fff7ed', padding: '1rem', borderRadius: '10px' }}>
                {stage.challenges.map((challenge, i) => (
                  <p key={i} style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <strong>• </strong>{challenge}
                  </p>
                ))}
              </div>

              {stage.childTips && (
                <>
                  <div className="section-title">Barn & Hund</div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: '#6366f1' }}>
                    <Baby size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ fontSize: '0.9rem' }}>{stage.childTips}</p>
                  </div>
                </>
              )}

              <div className="stress-less">
                <strong>Lugnande råd:</strong> Kom ihåg att varje hund är unik. Om något känns svårt, andas ut – det är ofta bara en fas i utvecklingen!
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderVarningar = () => (
    <div className="container">
      <h2 style={{ marginBottom: '1rem' }}>Varningar & Säkerhet</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        Saker du bör undvika och vad du ska göra om olyckan är framme.
      </p>
      {WARNINGS.map((w) => (
        <div key={w.id} className={`card warning-card danger-${w.dangerLevel}`}>
          <div className={`tag tag-${w.dangerLevel}`}>{w.dangerLevel} Fara</div>
          <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{w.item}</h3>
          <p style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>{w.description}</p>
          <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '8px', marginTop: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              <ShieldAlert size={14} /> Åtgärd:
            </div>
            <p style={{ fontSize: '0.9rem' }}>{w.action}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderBarn = () => (
    <div className="container">
      <h2 style={{ marginBottom: '1rem' }}>Barn & Finsk Spets</h2>
      <div className="card">
        <h3><Heart size={20} /> En vän för livet</h3>
        <p>Finnspetsen är känd för att vara tålmodig och lekfull med barn. För att relationen ska bli så bra som möjligt är det viktigt att vi lär barnen att respektera hunden.</p>
        
        <div className="section-title">Gyllene regler för barnen</div>
        <ul>
          <li><strong>Stör aldrig</strong> en sovande hund. Sömn är livsviktigt för valpen.</li>
          <li><strong>Ingen mat vid bordet.</strong> Hunden ska äta sin egen mat ifred.</li>
          <li><strong>Låt hunden komma till dig.</strong> Jaga aldrig efter en hund som går undan.</li>
          <li><strong>Var mjuk.</strong> Inget dragande i svans eller öron.</li>
        </ul>

        <div className="stress-less" style={{ background: '#eff6ff', borderColor: '#3b82f6', color: '#1e40af' }}>
          <strong>Tips:</strong> Låt barnen vara med och lägga godisspår! Det är en perfekt aktivitet där barn och hund samarbetar utan fysiskt bus.
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header>
        <h1>Rödpäls-Resan</h1>
        <p style={{ opacity: 0.9, fontSize: '0.9rem' }}>Din guide till den finska spetsen</p>
      </header>

      <main>
        {view === 'resan' && renderResan()}
        {view === 'varningar' && renderVarningar()}
        {view === 'barn' && renderBarn()}
      </main>

      <nav className="nav-bar">
        <button className={`nav-item ${view === 'resan' ? 'active' : ''}`} onClick={() => setView('resan')}>
          <PawPrint size={24} />
          <span>Resan</span>
        </button>
        <button className={`nav-item ${view === 'varningar' ? 'active' : ''}`} onClick={() => setView('varningar')}>
          <AlertTriangle size={24} />
          <span>Varningar</span>
        </button>
        <button className={`nav-item ${view === 'barn' ? 'active' : ''}`} onClick={() => setView('barn')}>
          <Baby size={24} />
          <span>Barn</span>
        </button>
      </nav>
    </>
  );
};

export default App;
