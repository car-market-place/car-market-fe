import dynamic from "next/dynamic";

export const LazyHomeComponent = dynamic(() => import("@/components/organisms/home"), {
  loading: () => <p>Loading...</p>,
});
