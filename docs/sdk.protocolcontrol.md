<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@nftlabs/sdk](./sdk.md) &gt; [ProtocolControl](./sdk.protocolcontrol.md)

## ProtocolControl class

<b>Signature:</b>

```typescript
export class ProtocolControl extends BaseContract 
```
<b>Extends:</b> BaseContract

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [callStatic](./sdk.protocolcontrol.callstatic.md) |  | { DEFAULT\_ADMIN\_ROLE(overrides?: CallOverrides): Promise&lt;string&gt;; MAX\_BPS(overrides?: CallOverrides): Promise&lt;BigNumber&gt;; NFTLABS(overrides?: CallOverrides): Promise&lt;string&gt;; PROTOCOL\_ADMIN(overrides?: CallOverrides): Promise&lt;string&gt;; \_contractURI(overrides?: CallOverrides): Promise&lt;string&gt;; addModule( \_newModuleAddress: string, \_moduleType: BigNumberish, overrides?: CallOverrides ): Promise&lt;string&gt;; contractURI(overrides?: CallOverrides): Promise&lt;string&gt;; getAllModulesOfType( \_moduleType: BigNumberish, overrides?: CallOverrides ): Promise&lt;string\[\]&gt;; getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise&lt;string&gt;; grantRole( role: BytesLike, account: string, overrides?: CallOverrides ): Promise&lt;void&gt;; hasRole( role: BytesLike, account: string, overrides?: CallOverrides ): Promise&lt;boolean&gt;; marketFeeBps(overrides?: CallOverrides): Promise&lt;BigNumber&gt;; moduleType(arg0: BytesLike, overrides?: CallOverrides): Promise&lt;number&gt;; modules(arg0: BytesLike, overrides?: CallOverrides): Promise&lt;string&gt;; nftlabsTreasury(overrides?: CallOverrides): Promise&lt;string&gt;; numOfModuleType( arg0: BigNumberish, overrides?: CallOverrides ): Promise&lt;BigNumber&gt;; pauseProtocol(\_toPause: boolean, overrides?: CallOverrides): Promise&lt;void&gt;; renounceRole( role: BytesLike, account: string, overrides?: CallOverrides ): Promise&lt;void&gt;; revokeRole( role: BytesLike, account: string, overrides?: CallOverrides ): Promise&lt;void&gt;; setContractURI(\_URI: string, overrides?: CallOverrides): Promise&lt;void&gt;; supportsInterface( interfaceId: BytesLike, overrides?: CallOverrides ): Promise&lt;boolean&gt;; systemPaused(overrides?: CallOverrides): Promise&lt;boolean&gt;; transferProtocolFunds( \_asset: string, \_to: string, \_amount: BigNumberish, overrides?: CallOverrides ): Promise&lt;void&gt;; updateMarketFeeBps( \_newFeeBps: BigNumberish, overrides?: CallOverrides ): Promise&lt;void&gt;; updateModule( \_moduleId: BytesLike, \_newModuleAddress: string, overrides?: CallOverrides ): Promise&lt;void&gt;; updateNftlabsTreasury( \_newTreasury: string, overrides?: CallOverrides ): Promise&lt;void&gt;; } |  |
|  [estimateGas](./sdk.protocolcontrol.estimategas.md) |  | { DEFAULT\_ADMIN\_ROLE(overrides?: CallOverrides): Promise&lt;BigNumber&gt;; MAX\_BPS(overrides?: CallOverrides): Promise&lt;BigNumber&gt;; NFTLABS(overrides?: CallOverrides): Promise&lt;BigNumber&gt;; PROTOCOL\_ADMIN(overrides?: CallOverrides): Promise&lt;BigNumber&gt;; \_contractURI(overrides?: CallOverrides): Promise&lt;BigNumber&gt;; addModule( \_newModuleAddress: string, \_moduleType: BigNumberish, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;BigNumber&gt;; contractURI(overrides?: CallOverrides): Promise&lt;BigNumber&gt;; getAllModulesOfType( \_moduleType: BigNumberish, overrides?: CallOverrides ): Promise&lt;BigNumber&gt;; getRoleAdmin( role: BytesLike, overrides?: CallOverrides ): Promise&lt;BigNumber&gt;; grantRole( role: BytesLike, account: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;BigNumber&gt;; hasRole( role: BytesLike, account: string, overrides?: CallOverrides ): Promise&lt;BigNumber&gt;; marketFeeBps(overrides?: CallOverrides): Promise&lt;BigNumber&gt;; moduleType(arg0: BytesLike, overrides?: CallOverrides): Promise&lt;BigNumber&gt;; modules(arg0: BytesLike, overrides?: CallOverrides): Promise&lt;BigNumber&gt;; nftlabsTreasury(overrides?: CallOverrides): Promise&lt;BigNumber&gt;; numOfModuleType( arg0: BigNumberish, overrides?: CallOverrides ): Promise&lt;BigNumber&gt;; pauseProtocol( \_toPause: boolean, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;BigNumber&gt;; renounceRole( role: BytesLike, account: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;BigNumber&gt;; revokeRole( role: BytesLike, account: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;BigNumber&gt;; setContractURI( \_URI: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;BigNumber&gt;; supportsInterface( interfaceId: BytesLike, overrides?: CallOverrides ): Promise&lt;BigNumber&gt;; systemPaused(overrides?: CallOverrides): Promise&lt;BigNumber&gt;; transferProtocolFunds( \_asset: string, \_to: string, \_amount: BigNumberish, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;BigNumber&gt;; updateMarketFeeBps( \_newFeeBps: BigNumberish, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;BigNumber&gt;; updateModule( \_moduleId: BytesLike, \_newModuleAddress: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;BigNumber&gt;; updateNftlabsTreasury( \_newTreasury: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;BigNumber&gt;; } |  |
|  [filters](./sdk.protocolcontrol.filters.md) |  | { "FundsTransferred(address,address,uint256)"( asset?: null, to?: null, amount?: null ): TypedEventFilter&lt; \[string, string, BigNumber\], { asset: string; to: string; amount: BigNumber } &gt;; FundsTransferred( asset?: null, to?: null, amount?: null ): TypedEventFilter&lt; \[string, string, BigNumber\], { asset: string; to: string; amount: BigNumber } &gt;; "MarketFeeBps(uint256)"( marketFeeBps?: null ): TypedEventFilter&lt;\[BigNumber\], { marketFeeBps: BigNumber }&gt;; MarketFeeBps( marketFeeBps?: null ): TypedEventFilter&lt;\[BigNumber\], { marketFeeBps: BigNumber }&gt;; "ModuleUpdated(bytes32,address,uint256)"( moduleId?: BytesLike \| null, module?: string \| null, moduleType?: BigNumberish \| null ): TypedEventFilter&lt; \[string, string, BigNumber\], { moduleId: string; module: string; moduleType: BigNumber } &gt;; ModuleUpdated( moduleId?: BytesLike \| null, module?: string \| null, moduleType?: BigNumberish \| null ): TypedEventFilter&lt; \[string, string, BigNumber\], { moduleId: string; module: string; moduleType: BigNumber } &gt;; "NFTLabsTreasury(address)"( \_nftlabsTreasury?: null ): TypedEventFilter&lt;\[string\], { \_nftlabsTreasury: string }&gt;; NFTLabsTreasury( \_nftlabsTreasury?: null ): TypedEventFilter&lt;\[string\], { \_nftlabsTreasury: string }&gt;; "RoleAdminChanged(bytes32,bytes32,bytes32)"( role?: BytesLike \| null, previousAdminRole?: BytesLike \| null, newAdminRole?: BytesLike \| null ): TypedEventFilter&lt; \[string, string, string\], { role: string; previousAdminRole: string; newAdminRole: string } &gt;; RoleAdminChanged( role?: BytesLike \| null, previousAdminRole?: BytesLike \| null, newAdminRole?: BytesLike \| null ): TypedEventFilter&lt; \[string, string, string\], { role: string; previousAdminRole: string; newAdminRole: string } &gt;; "RoleGranted(bytes32,address,address)"( role?: BytesLike \| null, account?: string \| null, sender?: string \| null ): TypedEventFilter&lt; \[string, string, string\], { role: string; account: string; sender: string } &gt;; RoleGranted( role?: BytesLike \| null, account?: string \| null, sender?: string \| null ): TypedEventFilter&lt; \[string, string, string\], { role: string; account: string; sender: string } &gt;; "RoleRevoked(bytes32,address,address)"( role?: BytesLike \| null, account?: string \| null, sender?: string \| null ): TypedEventFilter&lt; \[string, string, string\], { role: string; account: string; sender: string } &gt;; RoleRevoked( role?: BytesLike \| null, account?: string \| null, sender?: string \| null ): TypedEventFilter&lt; \[string, string, string\], { role: string; account: string; sender: string } &gt;; "SystemPaused(bool)"( isPaused?: null ): TypedEventFilter&lt;\[boolean\], { isPaused: boolean }&gt;; SystemPaused( isPaused?: null ): TypedEventFilter&lt;\[boolean\], { isPaused: boolean }&gt;; } |  |
|  [functions](./sdk.protocolcontrol.functions.md) |  | { DEFAULT\_ADMIN\_ROLE(overrides?: CallOverrides): Promise&lt;\[string\]&gt;; MAX\_BPS(overrides?: CallOverrides): Promise&lt;\[BigNumber\]&gt;; NFTLABS(overrides?: CallOverrides): Promise&lt;\[string\]&gt;; PROTOCOL\_ADMIN(overrides?: CallOverrides): Promise&lt;\[string\]&gt;; \_contractURI(overrides?: CallOverrides): Promise&lt;\[string\]&gt;; addModule( \_newModuleAddress: string, \_moduleType: BigNumberish, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;ContractTransaction&gt;; contractURI(overrides?: CallOverrides): Promise&lt;\[string\]&gt;; getAllModulesOfType( \_moduleType: BigNumberish, overrides?: CallOverrides ): Promise&lt;\[string\[\]\] &amp; { allModules: string\[\] }&gt;; getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise&lt;\[string\]&gt;; grantRole( role: BytesLike, account: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;ContractTransaction&gt;; hasRole( role: BytesLike, account: string, overrides?: CallOverrides ): Promise&lt;\[boolean\]&gt;; marketFeeBps(overrides?: CallOverrides): Promise&lt;\[BigNumber\]&gt;; moduleType(arg0: BytesLike, overrides?: CallOverrides): Promise&lt;\[number\]&gt;; modules(arg0: BytesLike, overrides?: CallOverrides): Promise&lt;\[string\]&gt;; nftlabsTreasury(overrides?: CallOverrides): Promise&lt;\[string\]&gt;; numOfModuleType( arg0: BigNumberish, overrides?: CallOverrides ): Promise&lt;\[BigNumber\]&gt;; pauseProtocol( \_toPause: boolean, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;ContractTransaction&gt;; renounceRole( role: BytesLike, account: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;ContractTransaction&gt;; revokeRole( role: BytesLike, account: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;ContractTransaction&gt;; setContractURI( \_URI: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;ContractTransaction&gt;; supportsInterface( interfaceId: BytesLike, overrides?: CallOverrides ): Promise&lt;\[boolean\]&gt;; systemPaused(overrides?: CallOverrides): Promise&lt;\[boolean\]&gt;; transferProtocolFunds( \_asset: string, \_to: string, \_amount: BigNumberish, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;ContractTransaction&gt;; updateMarketFeeBps( \_newFeeBps: BigNumberish, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;ContractTransaction&gt;; updateModule( \_moduleId: BytesLike, \_newModuleAddress: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;ContractTransaction&gt;; updateNftlabsTreasury( \_newTreasury: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;ContractTransaction&gt;; } |  |
|  [interface](./sdk.protocolcontrol.interface.md) |  | ProtocolControlInterface |  |
|  [populateTransaction](./sdk.protocolcontrol.populatetransaction.md) |  | { DEFAULT\_ADMIN\_ROLE( overrides?: CallOverrides ): Promise&lt;PopulatedTransaction&gt;; MAX\_BPS(overrides?: CallOverrides): Promise&lt;PopulatedTransaction&gt;; NFTLABS(overrides?: CallOverrides): Promise&lt;PopulatedTransaction&gt;; PROTOCOL\_ADMIN(overrides?: CallOverrides): Promise&lt;PopulatedTransaction&gt;; \_contractURI(overrides?: CallOverrides): Promise&lt;PopulatedTransaction&gt;; addModule( \_newModuleAddress: string, \_moduleType: BigNumberish, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;PopulatedTransaction&gt;; contractURI(overrides?: CallOverrides): Promise&lt;PopulatedTransaction&gt;; getAllModulesOfType( \_moduleType: BigNumberish, overrides?: CallOverrides ): Promise&lt;PopulatedTransaction&gt;; getRoleAdmin( role: BytesLike, overrides?: CallOverrides ): Promise&lt;PopulatedTransaction&gt;; grantRole( role: BytesLike, account: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;PopulatedTransaction&gt;; hasRole( role: BytesLike, account: string, overrides?: CallOverrides ): Promise&lt;PopulatedTransaction&gt;; marketFeeBps(overrides?: CallOverrides): Promise&lt;PopulatedTransaction&gt;; moduleType( arg0: BytesLike, overrides?: CallOverrides ): Promise&lt;PopulatedTransaction&gt;; modules( arg0: BytesLike, overrides?: CallOverrides ): Promise&lt;PopulatedTransaction&gt;; nftlabsTreasury(overrides?: CallOverrides): Promise&lt;PopulatedTransaction&gt;; numOfModuleType( arg0: BigNumberish, overrides?: CallOverrides ): Promise&lt;PopulatedTransaction&gt;; pauseProtocol( \_toPause: boolean, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;PopulatedTransaction&gt;; renounceRole( role: BytesLike, account: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;PopulatedTransaction&gt;; revokeRole( role: BytesLike, account: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;PopulatedTransaction&gt;; setContractURI( \_URI: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;PopulatedTransaction&gt;; supportsInterface( interfaceId: BytesLike, overrides?: CallOverrides ): Promise&lt;PopulatedTransaction&gt;; systemPaused(overrides?: CallOverrides): Promise&lt;PopulatedTransaction&gt;; transferProtocolFunds( \_asset: string, \_to: string, \_amount: BigNumberish, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;PopulatedTransaction&gt;; updateMarketFeeBps( \_newFeeBps: BigNumberish, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;PopulatedTransaction&gt;; updateModule( \_moduleId: BytesLike, \_newModuleAddress: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;PopulatedTransaction&gt;; updateNftlabsTreasury( \_newTreasury: string, overrides?: Overrides &amp; { from?: string \| Promise&lt;string&gt; } ): Promise&lt;PopulatedTransaction&gt;; } |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [\_contractURI(overrides)](./sdk.protocolcontrol._contracturi.md) |  |  |
|  [addModule(\_newModuleAddress, \_moduleType, overrides)](./sdk.protocolcontrol.addmodule.md) |  |  |
|  [attach(addressOrName)](./sdk.protocolcontrol.attach.md) |  |  |
|  [connect(signerOrProvider)](./sdk.protocolcontrol.connect.md) |  |  |
|  [contractURI(overrides)](./sdk.protocolcontrol.contracturi.md) |  |  |
|  [DEFAULT\_ADMIN\_ROLE(overrides)](./sdk.protocolcontrol.default_admin_role.md) |  |  |
|  [deployed()](./sdk.protocolcontrol.deployed.md) |  |  |
|  [getAllModulesOfType(\_moduleType, overrides)](./sdk.protocolcontrol.getallmodulesoftype.md) |  |  |
|  [getRoleAdmin(role, overrides)](./sdk.protocolcontrol.getroleadmin.md) |  |  |
|  [grantRole(role, account, overrides)](./sdk.protocolcontrol.grantrole.md) |  |  |
|  [hasRole(role, account, overrides)](./sdk.protocolcontrol.hasrole.md) |  |  |
|  [listeners(eventFilter)](./sdk.protocolcontrol.listeners.md) |  |  |
|  [listeners(eventName)](./sdk.protocolcontrol.listeners_1.md) |  |  |
|  [marketFeeBps(overrides)](./sdk.protocolcontrol.marketfeebps.md) |  |  |
|  [MAX\_BPS(overrides)](./sdk.protocolcontrol.max_bps.md) |  |  |
|  [modules(arg0, overrides)](./sdk.protocolcontrol.modules.md) |  |  |
|  [moduleType(arg0, overrides)](./sdk.protocolcontrol.moduletype.md) |  |  |
|  [NFTLABS(overrides)](./sdk.protocolcontrol.nftlabs.md) |  |  |
|  [nftlabsTreasury(overrides)](./sdk.protocolcontrol.nftlabstreasury.md) |  |  |
|  [numOfModuleType(arg0, overrides)](./sdk.protocolcontrol.numofmoduletype.md) |  |  |
|  [off(eventFilter, listener)](./sdk.protocolcontrol.off.md) |  |  |
|  [off(eventName, listener)](./sdk.protocolcontrol.off_1.md) |  |  |
|  [on(eventFilter, listener)](./sdk.protocolcontrol.on.md) |  |  |
|  [on(eventName, listener)](./sdk.protocolcontrol.on_1.md) |  |  |
|  [once(eventFilter, listener)](./sdk.protocolcontrol.once.md) |  |  |
|  [once(eventName, listener)](./sdk.protocolcontrol.once_1.md) |  |  |
|  [pauseProtocol(\_toPause, overrides)](./sdk.protocolcontrol.pauseprotocol.md) |  |  |
|  [PROTOCOL\_ADMIN(overrides)](./sdk.protocolcontrol.protocol_admin.md) |  |  |
|  [queryFilter(event, fromBlockOrBlockhash, toBlock)](./sdk.protocolcontrol.queryfilter.md) |  |  |
|  [removeAllListeners(eventFilter)](./sdk.protocolcontrol.removealllisteners.md) |  |  |
|  [removeAllListeners(eventName)](./sdk.protocolcontrol.removealllisteners_1.md) |  |  |
|  [removeListener(eventFilter, listener)](./sdk.protocolcontrol.removelistener.md) |  |  |
|  [removeListener(eventName, listener)](./sdk.protocolcontrol.removelistener_1.md) |  |  |
|  [renounceRole(role, account, overrides)](./sdk.protocolcontrol.renouncerole.md) |  |  |
|  [revokeRole(role, account, overrides)](./sdk.protocolcontrol.revokerole.md) |  |  |
|  [setContractURI(\_URI, overrides)](./sdk.protocolcontrol.setcontracturi.md) |  |  |
|  [supportsInterface(interfaceId, overrides)](./sdk.protocolcontrol.supportsinterface.md) |  |  |
|  [systemPaused(overrides)](./sdk.protocolcontrol.systempaused.md) |  |  |
|  [transferProtocolFunds(\_asset, \_to, \_amount, overrides)](./sdk.protocolcontrol.transferprotocolfunds.md) |  |  |
|  [updateMarketFeeBps(\_newFeeBps, overrides)](./sdk.protocolcontrol.updatemarketfeebps.md) |  |  |
|  [updateModule(\_moduleId, \_newModuleAddress, overrides)](./sdk.protocolcontrol.updatemodule.md) |  |  |
|  [updateNftlabsTreasury(\_newTreasury, overrides)](./sdk.protocolcontrol.updatenftlabstreasury.md) |  |  |
