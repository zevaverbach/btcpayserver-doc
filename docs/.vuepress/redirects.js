module.exports = [
  // Basics
  { path: '/btcpay-basics', redirect: '/UseCase/' },
  { path: '/btcpay-basics/usecase', redirect: '/UseCase/' },
  { path: '/btcpay-basics/walkthrough', redirect: '/Walkthrough/' },
  { path: '/btcpay-basics/btcpayvsothers', redirect: '/BTCPayVsOthers/' },
  { path: '/btcpay-basics/tryitout', redirect: '/TryItOut/' },
  { path: '/btcpay-basics/gettingstarted', redirect: '/RegisterAccount/' },
  // Deployment
  { path: '/deployment', redirect: '/Deployment/' },
  { path: '/deployment/deployment', redirect: '/Deployment/' },
  { path: '/deployment/lunanodewebdeployment', redirect: '/LunaNodeWebDeployment/' },
  { path: '/deployment/azuredeployment', redirect: '/AzureDeployment/' },
  { path: '/deployment/azuredeployment/azurepennypinching', redirect: '/AzurePennyPinching/' },
  { path: '/deployment/azuredeployment/changedomain', redirect: '/ChangeDomain/' },
  { path: '/deployment/dockerdeployment', redirect: '/Docker/' },
  { path: '/deployment/googleclouddeployment', redirect: '/GoogleCloudDeployment/' },
  { path: '/deployment/manualdeployment', redirect: '/ManualDeployment/' },
  { path: '/deployment/manualdeployment/manualdeploymentextended', redirect: '/ManualDeploymentExtended/' },
  { path: '/deployment/hardwaredeployment', redirect: '/HardwareDeployment/' },
  { path: '/deployment/raspberrypideployment', redirect: '/RaspberryPiDeployment/' },
  { path: '/deployment/raspberrypideployment/rpi3', redirect: '/RPi3/' },
  { path: '/deployment/raspberrypideployment/rpi4', redirect: '/RPi4/' },
  { path: '/deployment/thirdpartyhosting', redirect: '/ThirdPartyHosting/' },
  { path: '/deployment/advanced-deployment', redirect: '/DynamicDNS/' },
  { path: '/deployment/advanced-deployment/dynamicdns', redirect: '/DynamicDNS/' },
  { path: '/deployment/advanced-deployment/reversesshtunnel', redirect: '/ReverseSSHtunnel/' },
  // Getting Started
  { path: '/getting-started', redirect: '/RegisterAccount/' },
  { path: '/getting-started/registeraccount', redirect: '/RegisterAccount/' },
  { path: '/getting-started/createstore', redirect: '/CreateStore/' },
  { path: '/getting-started/connectwallet', redirect: '/WalletSetup/' },
  { path: '/ConnectWallet', redirect: '/WalletSetup/' },
  { path: '/getting-started/connectwallet/ledgerwallet', redirect: '/LedgerWallet/' },
  { path: '/getting-started/connectwallet/coldcardwallet', redirect: '/ColdCardWallet/' },
  { path: '/getting-started/connectwallet/wasabiwallet', redirect: '/WasabiWallet/' },
  { path: '/getting-started/connectwallet/electrumwallet', redirect: '/ElectrumWallet/' },
  { path: '/getting-started/connectwallet/electrumwallet/electrumx', redirect: '/ElectrumX/' },
  { path: '/getting-started/connectwallet/electrumwallet/electrumpersonalserver', redirect: '/ElectrumPersonalServer/' },
  { path: '/getting-started/connectwallet/hotwallet', redirect: '/HotWallet/' },
  { path: '/getting-started/whatsnext', redirect: '/WhatsNext/' },
  // Features
  { path: '/features', redirect: '/Apps/' },
  { path: '/features/apps', redirect: '/Apps/' },
  { path: '/features/wallet', redirect: '/Wallet/' },
  { path: '/features/wallet/hotwallet', redirect: '/HotWallet/' },
  { path: '/features/invoices', redirect: '/Invoices/' },
  { path: '/features/lightningnetwork', redirect: '/LightningNetwork/' },
  { path: '/features/accounting', redirect: '/Accounting/' },
  { path: '/features/paymentrequests', redirect: '/PaymentRequests/' },
  { path: '/features/vault', redirect: '/HardwareWalletIntegration/' },
  { path: '/Vault', redirect: '/HardwareWalletIntegration/' },
  { path: '/features/payjoin', redirect: '/Payjoin/' },
  { path: '/features/payjoin/payjoin-spec', redirect: '/Payjoin-spec/' },
  // Integrations
  { path: '/integrations', redirect: '/WooCommerce/' },
  { path: '/integrations/woocommerce', redirect: '/WooCommerce/' },
  { path: '/integrations/drupal', redirect: '/Drupal/' },
  { path: '/integrations/magento', redirect: '/Magento/' },
  { path: '/integrations/prestashop', redirect: '/PrestaShop/' },
  { path: '/integrations/customintegration', redirect: '/CustomIntegration/' },
  // Deveelopment
  { path: '/development', redirect: '/Architecture/' },
  { path: '/development/architecture', redirect: '/Architecture/' },
  { path: '/development/localdevelopment', redirect: '/LocalDevelopment/' },
  { path: '/development/altcoins', redirect: '/Altcoins/' },
  { path: '/development/architecture', redirect: '/Architecture/' },
  { path: '/development/theme', redirect: '/Theme/' },
  // FAQ
  { path: '/faq-and-common-issues', redirect: '/FAQ/' },
  { path: '/faq-and-common-issues/faq', redirect: '/FAQ/' },
  { path: '/faq-and-common-issues/faq-general', redirect: '/FAQ/FAQ-General/' },
  { path: '/faq-and-common-issues/faq-deployment', redirect: '/FAQ/FAQ-Deployment/' },
  { path: '/faq-and-common-issues/faq-synchronization', redirect: '/FAQ/FAQ-Synchronization/' },
  { path: '/faq-and-common-issues/faq-integrations', redirect: '/FAQ/FAQ-Integrations/' },
  { path: '/faq-and-common-issues/faq-serversettings', redirect: '/FAQ/FAQ-ServerSettings/' },
  { path: '/faq-and-common-issues/faq-stores', redirect: '/FAQ/FAQ-Stores/' },
  { path: '/faq-and-common-issues/faq-wallet', redirect: '/FAQ/FAQ-Wallet/' },
  { path: '/faq-and-common-issues/faq-apps', redirect: '/FAQ/FAQ-Apps/' },
  { path: '/faq-and-common-issues/faq-lightningnetwork', redirect: '/FAQ/FAQ-LightningNetwork/' },
  { path: '/faq-and-common-issues/faq-altcoin', redirect: '/FAQ/FAQ-Altcoin/' },
  // Support
  { path: '/support-and-community', redirect: '/Troubleshooting/' },
  { path: '/support-and-community/troubleshooting', redirect: '/Troubleshooting/' },
  { path: '/support-and-community/support', redirect: '/Support/' },
  { path: '/support-and-community/contribute', redirect: '/Contribute/' },
  { path: '/support-and-community/translate', redirect: '/Translate/' },
  { path: '/support-and-community/community', redirect: '/Community/' },
  // Old paths in new docs
  { path: '/DockerDeployment/', redirect: '/Docker/' }
]
