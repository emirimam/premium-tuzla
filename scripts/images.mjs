// Source photos from the original Google Sites page (premiumtuzla).
// The build downloads them, then crops / enhances / converts them to WebP.
const G = 'https://sites.google.com/sitesv-images-rt/';

export const images = [
  { name: 'hero',      id: 'AMxu72vFzIju2qXU58JpnsoV2-VRagESF3GrQ-02Vx7_4X_UYTuG2MM2d9WLTIei3CKmilnE4TrRC22HY1vFJyTOEupfsuAW453-0oaQpjz2jN--dv1QERRIbhMdYBSj8fkspNGugQ7POCKJpNhlIwlgnS91SF6eJxsW8R4r_LRoNbUHX3-iKurknwc4ue7S-ayeusVTOPUkCN6yoC1yMTm_rClabsDH86OeJl0gAKBUoKA' },
  { name: 'hero-2',    id: 'AMxu72t9K0IneZyJ8HdN2OLtFdUTZZQWqoPiobysRjYMFfcScQlMBoUqr4rB-gauRC-WT0dJCtpo-c2l0zzHS55DfPMu-xvtab4ZZeKlqdVsN0asMUMrkzrdKNbpLApDSjoQbPw0u87ubIxm23yEN-le44Sj58a3HTzif9A1ypzwWiUFremYb-rpDInY1KOisU0Bcxv7mt5QGQOoiQ-gRUHVlGKhdym_ZvdNv1RQhH302Zg' },
  { name: 'living',    id: 'AMxu72vpaD1SfRETrI_9FDJrZt1E1lru75_IeIcpq7Lg2AbFwyFIWCbhhSXSAqgGPau9goY8yOSFQ_r5Fsmj10qm98ANdEGsd5dVV_EQxuV9e4MMtsNUmJRhGjppEtPdZTqQXm0HRmmXMdnyQ6jF41zOAdjrg7m1fKLx-iAcNZfABOcb5i4U6qkKfCL7j2JSibge2VTohWJ0xTNEz-Bur4g0ms8XPGfOzXyUksVs3_D5Vos' },
  { name: 'living-2',  id: 'AMxu72skDAZdNouCdL35mHeeS_2_-00nU9nbe-S2yRczAZgC15BzSNuQmKv8sgxlx1x35ti5gEqbLRVaKFNQ3DfNeJ1Cmk96h13DdKaXkS0fiuHe7djV1LmHSEfQLKKv1VQc2TJ24nbvwfLXnYkGW3NH-0N8bxOm9uvwWKHn_aHsDcCGSFF1UXqfm0aP2gaPHF557WvM6_k5DalRmZ8ELFBPGHho-Sn4QR2oUSDG2khm' },
  { name: 'queen',     id: 'AMxu72vCIRhEpQwO1mS85MEECGEkSCKVFZ1UYXnK4xjTRQjUjhAXheK11LjkYZPOMt8rZ5u6NQOG6COq8luMQdFltjl2zCw8PMB1ZtsH179W-182OkfK6AGamEU6ICy0nFqJLgELbGVg4nDaLP1FLdPzt5WAWRt4xy8DAHjK9Nh6kt-s7MhqPgfnYd13rKaRbgeODb2SKU6FKBCTgZCaPd_dPcdDiVjuwsxRrTDpCOBX6Qs' },
  { name: 'queen-2',   id: 'AMxu72vbeH_ZZPJeAFoNcbN_upXXsqf796GO3kC72P9AeRkMh9GuUsbPgHCNAzf0JZTsetLaCjRQ5FVtcxug4ju6ftWMbUYlHC9wGIKhXNBBMCm9OlJE4IdpNxXfvz7TbYpZgzj-3_N5WAuIF_iuveyIxvaTCHkpehR7upMTulWqTHQCrmizUDZedgrh6NTBShr1Vjy5NAuHGVUd0xkloJJRrGKmCLRMutvoHceFArhPpfA' },
  { name: 'double',    id: 'AMxu72sN53PXSIfNMwCmDktBQhNsG_LTr-f8W7QiC52xMHimzyK-EIC0iwWnQ0c6n0JqKLBtX48NCD-mIbXyK8VHTQh-lPwxAkouF_8mcsmtL-IYR1wg3bCtQL8k25xTolHMGnTgB79Otrt-lskmLPEjqnfZI8YPdGqNtHGHW11A5vaHXoH2QuTJ1UXYuXyDOus7WAoWe4DdLabHUlv3J_6C0Oi8zNaEYQlQXmkgkhh5hCQ' },
  { name: 'double-2',  id: 'AMxu72t66TPPMYpqKjaOYfG-nmIlxw7dTUIsYt7O5ZaE0PdowKtGOd74KrcHkGNN_CNKgAPnSxLWwynCIMthjpk0pMioRh0wdRkBxdjzR29FTkKlGIRwroojY9pAE1DDgzWp2yjhIPfC0Ix8iCI8GbKyWTEiasvo4UTW4lYfPwRBFVD0CGWH7pwXDlwUJvhTsOlP_cZg4vQ05TrSJ77lKDt70gy8Rgq0nS32Mmdx3nBZuKw' },
  { name: 'kitchen',   id: 'AMxu72uUUJhBf9EnWWBBfn1BPq7XvGaoIZmN20LEsAS4m_DhY966PWpOnDAYjTWlBHF3UW52Scdc4vr_M6JFu0miq2oADjotkM1v-XiWvSoS-rgVYdXdnlmWwkwpk805X33WbRB-zNZBqGba_HVu7asBPZ3XXRYkK1NhVCcvOQ2wjMLtAP3sCHlbii2K1CvcgFUNJa_rrh1fdztWS7tLRrgu5OFwJGKeZa6bB9dtOWtCLqg' },
  { name: 'bathroom',  id: 'AMxu72tXyyNfugMIACtWBfn5xt3-d3MbSPMdaPtTH0vuj-OYTO-X97bUba6_NwK_kO_O_L2z-r_LtQoBdoTGtcPTiuRBuxgkTQrlLdSMzzqYsSFF3oBBGDqpTr4iGS1wbS7pRSFvwef_5la_SeLZ5YxkoDQOv1MO9vOBV0KWkFlV-YIff44dnau_JRLxhYsvoxg1LdNOhNiVnY4yNaYGLCRuPHKxkpfOr5LmxMH__o_t' },
  { name: 'hallway',   id: 'AMxu72sA30782V58esi5K164DCvQhW57x2SDvKeE7QfqA1KrTXEMVrheXSa8c6CTu0ZtIDvku9-7VjEEDF34TMhmcNjLvOM3VjHLF1A_wZzxt2DKw2fZtE5DNkbtTUpM1j25j6PtlsJmlXGvdG_UNBFsBi1qkBnq9taQUIGE7a0s1PIfuuzEAJ_JDmF8LtDc1omtHLioW2VYGB5FefWiIdltLKdPHffjEwVQHmibWNDZZo4' },
].map((i) => ({ ...i, url: `${G}${i.id}=w2400` }));
