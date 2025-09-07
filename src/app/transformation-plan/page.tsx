import Link from 'next/link';

export default function TransformationPlan() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Your AI Transformation Plan</h1>
      <p className="text-xl text-gray-400 mb-8 max-w-2xl text-center">
        A custom roadmap to build your infinite workforce and achieve 3.7x ROI in 6 months.
      </p>
      <div className="w-full max-w-4xl bg-gray-900 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Personalized Plan Includes:</h2>
        <ul className="space-y-3 text-lg text-gray-300">
          <li>• AI strategy assessment and roadmap</li>
          <li>• Custom workforce design for your business</li>
          <li>• Implementation timeline and milestones</li>
          <li>• ROI projections and success metrics</li>
          <li>• 30-day quick wins to get started</li>
        </ul>
      </div>
      <Link 
        href="/pricing" 
        className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
      >
        Get My Custom Plan
      </Link>
    </div>
  );
} 