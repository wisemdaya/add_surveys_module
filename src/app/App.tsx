import { Menu, MapPin, Calendar, Camera, FileText, ChevronRight, Dna, Heart, Users, Activity, ClipboardList } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import cocoImage from '../assets/9675871eb79a6ff3f307eaaef735ac57b5d78b1b.png';
import { useState } from 'react';

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

          {/* NEW: Surveys Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <h2 className="text-lg text-left mb-3">Surveys</h2>
            
            {!showAllergySurvey ? (
              <>
                <div className="space-y-2">
                  {/* Survey Link 1 */}
                  <button className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-left">Your dog's personality</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>

                  {/* Survey Link 2 */}
                  <button className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setShowAllergySurvey(true)}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Activity className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-left">Does your dog have seasonal allergies?</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>

                  {/* Survey Link 3 */}
                  <button className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <ClipboardList className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-left">Health information</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                
                {/* View Completed Surveys Link */}
                <button className="w-full text-blue-600 py-2 text-sm mt-3">
                  View completed surveys
                </button>
              </>
            ) : surveySubmitted ? (
              /* Blog Post After Submission */
              <div>
                <h3 className="text-lg mb-4">How to help your dog's seasonal allergies</h3>
                
                <div className="text-left space-y-4 text-sm text-gray-700">
                  <p>
                    Seasonal allergies can be uncomfortable for dogs, causing symptoms like sneezing, itching, and skin irritation. Here are some effective ways to help your furry friend feel better during allergy season.
                  </p>
                  
                  <h4 className="font-semibold text-base text-gray-900">Keep Your Dog Clean</h4>
                  <p>
                    Regular baths can help remove allergens from your dog's coat and skin. Use a gentle, hypoallergenic shampoo recommended by your veterinarian. Wiping your dog's paws and belly after outdoor walks can also reduce the amount of pollen they bring indoors.
                  </p>
                  
                  <h4 className="font-semibold text-base text-gray-900">Limit Outdoor Exposure</h4>
                  <p>
                    During peak pollen times (usually early morning and late afternoon), try to keep outdoor activities to a minimum. When pollen counts are high, consider shorter walks or indoor playtime instead.
                  </p>
                  
                  <h4 className="font-semibold text-base text-gray-900">Maintain a Clean Home Environment</h4>
                  <p>
                    Vacuum frequently, wash your dog's bedding regularly, and consider using an air purifier with a HEPA filter to reduce indoor allergens. Keep windows closed during high pollen days.
                  </p>
                  
                  <h4 className="font-semibold text-base text-gray-900">Consult Your Veterinarian</h4>
                  <p>
                    If your dog's allergy symptoms are severe or persistent, consult your veterinarian. They may recommend antihistamines, prescription medications, or allergy testing to identify specific triggers and develop a targeted treatment plan.
                  </p>
                  
                  <h4 className="font-semibold text-base text-gray-900">Consider Diet and Supplements</h4>
                  <p>
                    Omega-3 fatty acids can help reduce inflammation and support skin health. Talk to your vet about adding fish oil supplements or foods rich in omega-3s to your dog's diet.
                  </p>
                </div>
                
                <button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6"
                  onClick={handleBackToHome}
                >
                  Back to Home
                </button>
              </div>
            ) : (
              /* Allergy Survey Form */
              <div>
                <button 
                  className="text-blue-600 text-sm mb-4 flex items-center gap-1"
                  onClick={() => setShowAllergySurvey(false)}
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back to surveys
                </button>
                
                <h3 className="text-base mb-4">Seasonal Allergy Survey</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Does Coco sneeze frequently?</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="sneezing"
                          value="yes"
                          checked={surveyAnswers.sneezing === 'yes'}
                          onChange={(e) => setSurveyAnswers({ ...surveyAnswers, sneezing: e.target.value })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="sneezing"
                          value="no"
                          checked={surveyAnswers.sneezing === 'no'}
                          onChange={(e) => setSurveyAnswers({ ...surveyAnswers, sneezing: e.target.value })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-sm">No</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="sneezing"
                          value="sometimes"
                          checked={surveyAnswers.sneezing === 'sometimes'}
                          onChange={(e) => setSurveyAnswers({ ...surveyAnswers, sneezing: e.target.value })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-sm">Sometimes</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Does Coco itch frequently?</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="itching"
                          value="yes"
                          checked={surveyAnswers.itching === 'yes'}
                          onChange={(e) => setSurveyAnswers({ ...surveyAnswers, itching: e.target.value })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="itching"
                          value="no"
                          checked={surveyAnswers.itching === 'no'}
                          onChange={(e) => setSurveyAnswers({ ...surveyAnswers, itching: e.target.value })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-sm">No</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="itching"
                          value="sometimes"
                          checked={surveyAnswers.itching === 'sometimes'}
                          onChange={(e) => setSurveyAnswers({ ...surveyAnswers, itching: e.target.value })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-sm">Sometimes</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Does Coco have skin irritation?</label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="skinIrritation"
                          value="yes"
                          checked={surveyAnswers.skinIrritation === 'yes'}
                          onChange={(e) => setSurveyAnswers({ ...surveyAnswers, skinIrritation: e.target.value })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-sm">Yes</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="skinIrritation"
                          value="no"
                          checked={surveyAnswers.skinIrritation === 'no'}
                          onChange={(e) => setSurveyAnswers({ ...surveyAnswers, skinIrritation: e.target.value })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-sm">No</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="skinIrritation"
                          value="sometimes"
                          checked={surveyAnswers.skinIrritation === 'sometimes'}
                          onChange={(e) => setSurveyAnswers({ ...surveyAnswers, skinIrritation: e.target.value })}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-sm">Sometimes</span>
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6"
                  onClick={handleSurveySubmit}
                >
                  Submit Survey
                </button>
              </div>
            )}
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