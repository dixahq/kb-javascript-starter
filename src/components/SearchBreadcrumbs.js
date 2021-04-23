import React from "react";
import Breadcrumb from "./Breadcrumbs";
import { useSearchBreadcrumbs } from "@elevio/kb-kit/lib/hooks";

function SearchBreadcrumb({ className }) {
  const crumbs = useSearchBreadcrumbs();
  return <Breadcrumb className={className} noLinks crumbs={crumbs} />;
}

export default SearchBreadcrumb;
