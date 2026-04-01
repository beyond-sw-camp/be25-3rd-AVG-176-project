/** 사이드 메뉴 — Figma Group 1 구조 기준 (라우트가 있는 항목만 링크) */
export const dashboardNav = [
  { type: 'link', label: '대시보드', to: '/app/dashboard' },
  { type: 'heading', label: '소싱기' },
  { type: 'sub', label: '상품소싱' },
  { type: 'link', label: '카테고리 소싱', to: '/app/sourcing/category' },
  { type: 'heading', label: '상품 관리' },
  { type: 'link', label: '수집/등록 상품 관리', to: '/app/products/collected' },
  { type: 'muted', label: '유입수 분석' },
  { type: 'heading', label: '주문 관리' },
  { type: 'link', label: '전체 주문', to: '/app/orders/all' },
  { type: 'link', label: '자동 주문 현황', to: '/app/orders/auto' },
  { type: 'link', label: '취소/환불', to: '/app/orders/cancel-refund' },
  { type: 'heading', label: '결제 관리' },
  { type: 'link', label: '결제수단 관리', to: '/app/payment/methods' },
  { type: 'muted', label: '자동결제 설정' },
  { type: 'link', label: '실패 내역', to: '/app/payment/failures' },
  { type: 'heading', label: '수익 관리' },
  { type: 'link', label: '월별 수익', to: '/app/revenue/monthly' },
  { type: 'link', label: '예상/실제 마진', to: '/app/revenue/margin' },
  { type: 'heading', label: '설정' },
  { type: 'link', label: '업로드/마켓', to: '/app/settings/upload-markets' },
  { type: 'muted', label: 'AI API 키 관리' },
  { type: 'link', label: '제외/금지어 관리', to: '/app/settings/excluded-keywords' },
]

export const appFooterText =
  '개인 정보 처리 방침 | 사이트 이용 약관 | 쿠키 기본 설정 | © 2026, Autosource Web Services, All right reserved.'
