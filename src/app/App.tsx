import { Menu, MapPin, Calendar, Camera, FileText, ChevronRight, Dna, Heart, Users, Activity, ClipboardList } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import cocoImage from '../assets/9675871eb79a6ff3f307eaaef735ac57b5d78b1b.png';
import { useState, useEffect } from 'react';

export default function App() {
  const [showAllergySurvey, setShowAllergySurvey] = useState(false);
  const [surveySubmitted, setSurveySubmitted] = useState(false);
  const [surveyAnswers, setSurveyAnswers] = useState({
    sneezing: '',
    itching: '',
    skinIrritation: ''
  });

  const handleSurveySubmit = () => {
    // Handle survey submission
    setSurveySubmitted(true);
  };

  const handleBackToHome = () => {
    setShowAllergySurvey(false);
    setSurveySubmitted(false);
    setSurveyAnswers({
      sneezing: '',
      itching: '',
      skinIrritation: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#2B4F9F] text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
            <div className="bg-white"></div>
            <div className="bg-white"></div>
            <div className="bg-white"></div>
            <div className="bg-white"></div>
          </div>
          <span className="font-semibold tracking-wide">WISDOM PANEL®</span>
        </div>
        <button>
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-3">
        <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
          <div className="w-5 h-5 bg-white rounded-full"></div>
        </div>
        <button className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm">
          Highlights
        </button>
        <button className="px-4 py-1.5 text-gray-700 text-sm">
          Ancestry
        </button>
        <button className="px-4 py-1.5 text-gray-700 text-sm">
          Relatives
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto bg-white">
        {/* Pet Profile Section */}
        <div className="px-6 pt-6 pb-4 text-center">
          <div className="relative inline-block mb-4">
            <div className="w-40 h-40 rounded-full overflow-hidden bg-orange-400 p-4">
              <img 
                src={cocoImage} 
                alt="Coco" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          
          <h1 className="text-3xl mb-2">Coco</h1>
          
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-1">
              <span className="text-pink-500">♀</span>
              <span>Female</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Portland, OR</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>3yrs, 1mo</span>
            </div>
          </div>

          {/* Photo Gallery Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg mb-2 flex items-center justify-center gap-2">
            <Camera className="w-4 h-4" />
            <span>Create your pet's photo gallery for sharing with friends</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Add Photos Link */}
          <button className="text-blue-600 py-2 text-sm">
            Add Photos
          </button>

          {/* Complete Pet Profile Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg mb-4 flex items-center justify-center gap-2">
            <FileText className="w-4 h-4" />
            <span>Complete Pet Profile</span>
          </button>

          {/* NEW: Surveys Section (Airtable) */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <h2 className="text-lg text-left mb-3">Surveys</h2>

            <AirtableSurveys />
          </div>

        </div>

        {/* Ready to Learn More Section */}
        <div className="px-6 py-6 bg-white">
          <div className="mb-4">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg p-6 mb-4">
              <div className="flex items-center justify-center">
                <img 
                  src={cocoImage} 
                  alt="Wisdom Panel Kit" 
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl text-center mb-3">
            Ready to learn more about Coco?
          </h2>
          
          <p className="text-center text-gray-600 mb-4 text-sm">
            Unlock Coco's breed mix, relatives, genetic health... and more.
          </p>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg mb-2 flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white rounded"></div>
            <span>Purchase Kit</span>
          </button>

          <button className="w-full text-blue-600 py-2 text-sm">
            Activate Kit
          </button>
        </div>

        {/* Features List */}
        <div className="px-6 py-4 space-y-3">
          <FeatureItem 
            icon={<Dna className="w-6 h-6 text-blue-600" />}
            text="Screens for 350+ breeds"
          />
          <FeatureItem 
            icon={<Heart className="w-6 h-6 text-blue-600" />}
            text="Genetic health tests"
          />
          <FeatureItem 
            icon={<Users className="w-6 h-6 text-blue-600" />}
            text="Finds their relatives"
          />
          <FeatureItem 
            icon={<Activity className="w-6 h-6 text-blue-600" />}
            text="Physical traits & appearance"
          />
          <FeatureItem 
            icon={<Heart className="w-6 h-6 text-blue-600" />}
            text="Behavior tests"
          />
        </div>

        {/* Bottom Spacing */}
        <div className="h-12"></div>
      </div>
    </div>
  );
}

type Survey = {
  id: string;
  title: string;
  typeformURL?: string;
  status?: string;
  createdTime?: string;
};

function AirtableSurveys() {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Survey | null>(null);

  useEffect(() => {
    const BASE = (import.meta.env.VITE_AIRTABLE_BASE as string) || '';
    const TABLE = (import.meta.env.VITE_AIRTABLE_TABLE as string) || '';
    const TOKEN = (import.meta.env.VITE_AIRTABLE_TOKEN as string) || '';

    if (!BASE || !TABLE || !TOKEN) {
      setError('Airtable config missing. Set VITE_AIRTABLE_BASE, VITE_AIRTABLE_TABLE, VITE_AIRTABLE_TOKEN');
      setLoading(false);
      return;
    }

    const filter = encodeURIComponent("({Status} = 'active')");
    const url = `https://api.airtable.com/v0/${BASE}/${encodeURIComponent(TABLE)}?pageSize=100&filterByFormula=${filter}`;

    fetch(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error.message || 'Airtable request failed');
          setLoading(false);
          return;
        }

        const records = data.records || [];
        const mapped: Survey[] = records
          .map((r: any) => ({
            id: r.id,
            title: r.fields?.Title || 'Untitled',
            typeformURL: r.fields?.TypeformURL || r.fields?.Typeform || '',
            status: r.fields?.Status,
            createdTime: r.createdTime || r.fields?.['Date Created'],
          }))
          .sort((a, b) => (b.createdTime || '').localeCompare(a.createdTime || ''))
          .slice(0, 3);

        setSurveys(mapped);
        setLoading(false);
      })
      .catch((err) => {
        setError(String(err));
        setLoading(false);
      });
  }, []);

  if (error) return <div className="text-sm text-red-600">{error}</div>;
  if (loading) return <div className="text-sm text-gray-600">Loading surveys...</div>;

  if (selected) {
    return (
      <div>
        <button className="text-blue-600 text-sm mb-4 flex items-center gap-1" onClick={() => setSelected(null)}>
          <ChevronRight className="w-4 h-4 rotate-180" />
          Back to surveys
        </button>

        <div className="w-full">
          <div className="mb-2 text-sm font-medium">{selected.title}</div>
          <div className="w-full h-96 border rounded overflow-hidden">
            <iframe
              src={selected.typeformURL}
              title={selected.title}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    );
  }

  if (surveys.length === 0) return <div className="text-sm text-gray-600">No active surveys available.</div>;

  return (
    <div className="space-y-2">
      {surveys.map((s) => (
        <button
          key={s.id}
          className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setSelected(s)}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-left">{s.title}</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      ))}
    </div>
  );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <span className="text-gray-700">{text}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-300" />
    </div>
  );
}