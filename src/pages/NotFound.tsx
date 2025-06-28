import { useNavigate } from 'react-router-dom';
import { FileSearch, FileLock } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-4">
      {/* Header with logo and badge */}
      <div className="absolute top-6 left-6 flex flex-col items-start">
        <div className="flex items-center mb-2">
          <FileLock className="h-6 w-6 text-primary-500 mr-2" />
          <span className="text-xl font-bold">TrustRx</span>
        </div>
        {/* Powered by Bolt badge */}
        <img 
          src="/black_circle_360x360.png" 
          alt="Powered by Bolt" 
          className="w-12 h-12 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() => window.open('https://bolt.new', '_blank')}
          title="Powered by Bolt"
        />
      </div>

      <FileSearch className="h-20 w-20 text-primary-500 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-neutral-600 text-lg mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => navigate('/')} 
          className="btn-primary px-6"
        >
          Go Home
        </button>
        <button 
          onClick={() => navigate(-1)} 
          className="btn-outline px-6"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;