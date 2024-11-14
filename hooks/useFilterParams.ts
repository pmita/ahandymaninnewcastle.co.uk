// HOOKS
import { useSearchParams } from "next/navigation";
// UTILS
import { BASE_LIMIT } from "@/utils/constants";

export const useFilterParams = () => {
    const searchParams = useSearchParams();
    const status = searchParams.get('status') || 'ALL';
    const sort = searchParams.get('sort') || 'desc';
    const limit = searchParams.get('limit') || BASE_LIMIT;
    const display = searchParams.get('display') || 'GRID';

    return { status, sort, limit, display }
}