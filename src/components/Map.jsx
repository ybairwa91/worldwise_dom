import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>
        Position:{lat},{lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 20, lng: 120 })}>
        Change query
      </button>
    </div>
  );
}

export default Map;
