import styles from "./Styles/index.module.css";

export default function Socials() {
  return (
    <div className={styles.social}>
      <hr className="hr" />
      
      <div className= {styles.parent}>
        
        <div className={styles.floatLeftChild}>
            <a
              className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://twitter.com/wordcel_club"
              target="_blank"
            >
              <span style={{ fontSize: "lg", color: "gray" }}>
                <i class="fa-brands fa-twitter fa-lg"></i>
              </span>

              <span className="lg:hidden inline-block ml-2">Tweet</span>
            </a>
        </div>  

        <div className={styles.floatLeftChild}>

            <a
              className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://twitter.com/intent/tweet?text=Read%20%F0%9F%93%96%2C%20write%20%F0%9F%96%8A%2C%20own%20%F0%9F%94%91%20with%20%40wordcel_club%0Acheckout%0Awordcel.club"
              target="_blank"
            >
              <span style={{ color: "grey" }}>
                <i class="fa-solid fa-share fa-lg "></i>
              </span>
              <span className="lg:hidden inline-block ml-2">Tweet</span>
            </a>
        </div>
          
        
      </div>
    </div>
  );
}
