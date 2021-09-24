<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@nftlabs/sdk](./sdk.md) &gt; [NFTCollection](./sdk.nftcollection.md) &gt; [safeBatchTransferFrom](./sdk.nftcollection.safebatchtransferfrom.md)

## NFTCollection.safeBatchTransferFrom() method

<b>Signature:</b>

```typescript
safeBatchTransferFrom(
    from: string,
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  from | string |  |
|  to | string |  |
|  ids | BigNumberish\[\] |  |
|  amounts | BigNumberish\[\] |  |
|  data | BytesLike |  |
|  overrides | Overrides &amp; { from?: string \| Promise&lt;string&gt; } |  |

<b>Returns:</b>

Promise&lt;ContractTransaction&gt;
