import React from 'react';
import { ExternalLink, Shield, Clock, Hash, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlockchainVerificationProps {
  transactionId: string;
  hash: string;
  timestamp: string;
  verified: boolean;
  className?: string;
}

const BlockchainVerification: React.FC<BlockchainVerificationProps> = ({
  transactionId,
  hash,
  timestamp,
  verified,
  className = ''
}) => {
  // Algorand TestNet Explorer URLs
  const getExplorerUrl = (txId: string) => {
    return `https://testnet.algoexplorer.io/tx/${txId}`;
  };

  const getAddressUrl = (address: string) => {
    return `https://testnet.algoexplorer.io/address/${address}`;
  };

  const formatTimestamp = (ts: string) => {
    return new Date(ts).toLocaleString();
  };

  const truncateHash = (hashStr: string, length = 16) => {
    if (hashStr.length <= length) return hashStr;
    return `${hashStr.slice(0, length)}...${hashStr.slice(-4)}`;
  };

  return (
    <motion.div 
      className={`bg-white border border-neutral-200 rounded-lg p-4 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Shield className="h-5 w-5 text-primary-500 mr-2" />
          <h3 className="font-semibold text-lg">Blockchain Verification</h3>
        </div>
        {verified && (
          <div className="flex items-center text-success-600">
            <CheckCircle className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">Verified</span>
          </div>
        )}
      </div>

      <div className="space-y-3">
        {/* Transaction ID */}
        <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <ExternalLink className="h-4 w-4 text-neutral-500 mr-2" />
              <span className="text-sm font-medium text-neutral-700">Transaction ID</span>
            </div>
            <code className="text-sm text-neutral-600 font-mono">
              {truncateHash(transactionId, 20)}
            </code>
          </div>
          <a
            href={getExplorerUrl(transactionId)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs px-3 py-1.5 ml-3 flex items-center"
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            View on Explorer
          </a>
        </div>

        {/* File Hash */}
        <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <Hash className="h-4 w-4 text-neutral-500 mr-2" />
              <span className="text-sm font-medium text-neutral-700">File Hash</span>
            </div>
            <code className="text-sm text-neutral-600 font-mono">
              {truncateHash(hash, 20)}
            </code>
          </div>
          <button
            onClick={() => navigator.clipboard.writeText(hash)}
            className="btn-ghost text-xs px-3 py-1.5 ml-3"
          >
            Copy
          </button>
        </div>

        {/* Timestamp */}
        <div className="flex items-center p-3 bg-neutral-50 rounded-lg">
          <Clock className="h-4 w-4 text-neutral-500 mr-2" />
          <div>
            <span className="text-sm font-medium text-neutral-700">Verified On</span>
            <p className="text-sm text-neutral-600">{formatTimestamp(timestamp)}</p>
          </div>
        </div>

        {/* Network Info */}
        <div className="border-t border-neutral-200 pt-3 mt-3">
          <div className="flex items-center justify-between text-xs text-neutral-500">
            <span>Network: Algorand TestNet</span>
            <a
              href="https://testnet.algoexplorer.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary-500"
            >
              AlgoExplorer
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlockchainVerification;