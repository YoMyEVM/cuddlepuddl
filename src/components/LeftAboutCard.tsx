import React, { useState } from 'react';
import './AboutPanel.css';

const LeftAboutCard = () => {
  const roadmapItems = [
    {
      title: 'Swap within Collections',
      description: 'Swap a floor NFT from a collection to a floor NFT of the same collection with zero fees.',
    },
    {
      title: 'Add/Remove Liquidity',
      description: 'Wrap 1 NFT of a collection into 1000 mNFT ERC20 token fractions. Unwrap to recieve 1 NFT by returning the 1000 mNFT tokens',
    },
    {
      title: 'Deploy Swap Pool',
      description: 'Deploy a Fractional Swap Pool for any ERC721 collection returning 1000 ERC20 fractions per NFT deposited.',
    },
    {
      title: 'Collection Listing',
      description: 'Get a collection listed for inter-Collection or cross-collection swaps.',
    },
    {
      title: 'Cross Collection Swaps',
      description: 'Mutli-hop cross-collections swaps via Camelot Dex.',
    },
    {
      title: 'Direct Buy and Direct Sell',
      description: 'Coming Soon.',
    },
    {
      title: 'Randomized LootBox Sales',
      description: 'Coming Soon.',
    },
    {
      title: 'Swap and Staking Rewards',
      description: 'Coming Soon.',
    },
    {
      title: 'Advanced NFT Payoffs',
      description: 'Coming Soon.',
    },
    {
      title: 'Top Secret',
      description: 'Coming Soon.',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="about-card left" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
        <h3>Our Vision</h3>
        <p>Creating Liquid NFT Markets <br /> and Seamless Trading Experience</p>
      </div>

      <div style={{ flex: 2, padding: '20px', borderTop: '2px solid #6600CC', overflowY: 'auto' }}>
        <h4>Roadmap</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {roadmapItems.map((item, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
              <button
                onClick={() => toggleExpanded(index)}
                style={{
                  padding: expandedIndex === index ? '20px' : '10px 20px',
                  fontSize: '1rem',
                  backgroundColor: index <= 2 ? '#004d00' : '#1c1f26', // Mark first three items as green
                  color: index <= 2 ? '#a7ff83' : '#fff', // Light green text for first three items
                  border: index <= 2 ? '2px solid #007f00' : '2px solid #6600CC', // Green border for first three items
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                  height: expandedIndex === index ? 'auto' : '40px',
                  overflow: 'hidden',
                }}
              >
                <span>{item.title}</span>
                {expandedIndex === index && (
                  <p
                    style={{
                      marginTop: '10px',
                      fontSize: '0.9rem',
                      color: '#d1d5db',
                    }}
                  >
                    {item.description}
                  </p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftAboutCard;
