import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "@orderly.network/react/dist/styles.css";
import { TradingPage, OrderlyAppProvider } from "@orderly.network/react";
import { ConnectorProvider } from "@orderly.network/web3-onboard";

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <ConnectorProvider
      apiKey={import.meta.env.VITE_WEB3_ONBOARD_API_KEY}

    >
      <OrderlyAppProvider
        networkId="testnet"
        brokerId={import.meta.env.VITE_BROKER_ID}
        brokerName={import.meta.env.VITE_BROKER_NAME}
        theme={"primary"}
        appIcons={{
          main:{
            img:"public/vite.svg",
          },
          secondary:{
            img:"<secondary log src>",
          }
        }}
      >
         <TradingPage
          symbol={"PERP_ETH_USDC"}
          tradingViewConfig={`tradingView config`}
          onSymbolChange={`onSymbolChange handler`}
        />
      </OrderlyAppProvider>
    </ConnectorProvider>
  </React.StrictMode>,
)
