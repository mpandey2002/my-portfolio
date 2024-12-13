export const projects = [
  // Project 1
  {
    id: "project_1",
    img: "src/assets/projectThumnails/project_10.jpg",
    title: "Diabetes Health Indicators Analytics",
    summery: "Developed logistic regression and decision tree models with 95% accuracy to predict diabetes incidence, identifying high blood pressure, high cholesterol, and BMI as key risk factors.",
    moduleFullTitle: "Diabetes Health Indicators Analytics",
    moduleDescription: ["Predictive Modeling and Classification: The project utilizes predictive modeling, such as logistic regression and decision trees, to forecast diabetes prevalence and identify high-risk individuals, aiming to enhance personalized healthcare and targeted interventions. ", "Data-Driven Dashboards: Data-driven dashboards are developed to display critical diabetes metrics, providing stakeholders with essential information for informed decision-making regarding diabetes treatment and prevention efforts.","Comprehensive Health Indicator Analysis: The study examines a wide array of health indicators to uncover trends and risk factors associated with diabetes, contributing to a thorough understanding of the disease's prevalence and management.","Improving Public Health Outcomes: By integrating various analytical methodologies and health indicators, the project aims to inform and implement effective diabetes prevention and management strategies, ultimately improving public health outcomes and quality of life for individuals with diabetes."],
  },
  // Project 2
  {
    id: "project_2",
    img: "src/assets/projectThumnails/project_1.png",
    title: "Diabetes Health Indicators Analytics",
    summery: "We analyzed 1,000+ used Toyota Corolla listings using R. Key findings included strong inverse relationships between price, mileage (-0.85), and age (-0.75). Our regression model explained 82% of price variability with an RMSE of €1,500.",
    moduleFullTitle: "Pricing Price of Used cards",
    moduleDescription: [" Data Preparation: Utilizing R, we process a dataset of over 1,000 used Toyota Corolla listings, focusing on quantitative features like age (in years), mileage (in kilometers), and horsepower. Data cleaning steps include handling missing values and normalizing numerical data to prepare for analysis. ", "Exploratory Data Analysis (EDA): In R, we perform statistical analysis to quantify the relationships between variables. This includes calculating Pearson correlation coefficients between the price and features such as mileage (-0.85) and age (-0.75), indicating strong inverse relationships.","Regression Modeling: We construct a multiple linear regression model in R, incorporating features like age, mileage, fuel type, and horsepower. The model's fit is evaluated by an R-squared value of 0.82, indicating that 82% of the variability in price is explained by the model.","Model Evaluation: The final model’s predictive accuracy is quantified using metrics such as MSE (Mean Squared Error) and RMSE (Root Mean Squared Error), with an RMSE of €1,500, demonstrating the model’s ability to predict prices within a reasonable margin of error."],
  },
  // Project 3 ()
  {
    id: "project_3",
    img: "src/assets/projectThumnails/project_2.png",
    title: "Business Intelligence ",
    summery: "We cleaned and analyzed student retention data in Excel, finding that 90% of dropouts attended 'No Dropout' seminars. Using probabilistic modeling, we predicted dropouts based on multiple factors. Tableau dashboards provided actionable insights for improving student retention.",
    moduleFullTitle: "Business Intelligence on College Drop Out Students",
    moduleDescription: ["Data Compilation and Cleaning in Excel: The project begins by gathering and organizing data on student engagement and retention into Excel. We meticulously clean and preprocess the data, focusing on students attending voluntary seminars and their subsequent retention rates, ensuring accuracy and completeness for robust analysis.", "Descriptive Data Analysis with Excel and Tableau: Using Excel’s advanced analytical functions, we perform descriptive statistics to understand the core trends and patterns in the data. We visualize these trends in Tableau, creating interactive dashboards that illustrate the relationship between seminar attendance and student retention rates. The analysis reveals that 90% of students who dropped out had participated in the ‘No Dropout’ seminars.","Probabilistic Analysis and Predictive Modeling: Leveraging Excel's capabilities, we construct 2-input and 1-input data tables to calculate the probabilities of student dropouts based on multiple variables. These probabilistic models are enhanced by integrating additional data such as students' academic performance and socioeconomic status to refine predictions.","Business Intelligence Insights and Reporting: The final step involves synthesizing the findings into actionable insights using Tableau for dynamic reporting to stakeholders. We produce detailed reports and dashboards that not only display the quantitative impact of the seminars on student retention but also suggest data-driven strategies for improving future student engagement and success."],
  },
  // Project 4 ()
  {
    id: "project_4",
    img: "src/assets/projectThumnails/project_3.png",
    title: "Online Shopping",
    summery: "We used Python to predict online shopper behavior with a 10% error rate. Feature engineering in Excel improved accuracy, while Tableau visualizations and BI reports highlighted key predictors and insights for decision-making.",
    moduleFullTitle: "Online Shoppers Intention Analysis",
    moduleDescription: [
      " Data Pipeline and Machine Learning: Developed a data pipeline using Python to collect e-commerce behavior data, applying logistic regression and KNN algorithms to predict shopper behavior with a 10% error rate. This setup classified user intent effectively.",

      "Feature Engineering in Excel: Conducted feature engineering in Excel, selecting and transforming features to improve the predictive models. Integrated additional demographic and purchase behavior data to enhance accuracy.",

      "Visualization with Tableau: Utilized Tableau to visualize the results and performance of the algorithms. Created interactive dashboards that displayed key predictors of shopper intent, allowing stakeholders to easily interpret model effectiveness.",

      "Business Intelligence Reporting: Produced comprehensive BI reports in Tableau, providing actionable insights and supporting strategic decision-making with clear visualizations of trends and model outcomes.",
    ],
  },
  // Project 5 ()
  {
    id: "project_5",
    img: "src/assets/projectThumnails/project_4.png",
    title: "Stock Market",
    summery: "We used SQL and PostgreSQL for ETL on financial data, optimized stock portfolios in Excel, and forecasted student dropout probabilities with predictive models in SQL and Tableau.",
    moduleFullTitle: "MV Portfolio Optimization- Stock Market",
    moduleDescription: [
      " SQL and PostgreSQL for ETL: Utilized SQL and PostgreSQL for an efficient ETL process, integrating and managing large financial datasets from Yahoo Finance. This facilitated robust data handling and advanced querying essential for financial analysis.",

      "Portfolio Optimization in Excel: Applied the mean variance model in Excel to optimize stock portfolio asset weights, aiming to achieve a superior risk-reward ratio compared to the SP500TR. Excel's capabilities were key in simulating investment scenarios and calculating optimal allocations.",

      "Predictive Analytics for Education: Created predictive models using SQL and Tableau to forecast student dropout probabilities, providing actionable insights for educational improvement through detailed business intelligence reporting.",
    ],

  },
  // Project 6
  {

    id: "project_6",
    img: "src/assets/projectThumnails/project_5.png",
    title: "Data Visualization",
    summery: "Scraped laptop data from Flipkart using Python, cleaned it with Pandas, and visualized trends with Seaborn and Matplotlib. Developed predictive models for laptop prices using scikit-learn, providing actionable market insights",
    moduleFullTitle: "Web Scrapping and Data Visualization Using Python",
    moduleDescription: [
      " Web Scraping with Python: Utilized Python’s BeautifulSoup and requests libraries to scrape laptop prices, ratings, and specifications from Flipkart, ensuring efficient and accurate data collection in a Jupyter Notebook environment.",

      "Data Cleaning with Pandas: Processed the scraped data using Pandas, performing tasks like handling missing values and normalizing formats to prepare for detailed analysis. This preparation was crucial for ensuring data quality and reliability.",

      "Visualization with Seaborn and Matplotlib: Created insightful visualizations in Jupyter Notebook using Seaborn and Matplotlib to illustrate trends in laptop prices and ratings. These visualizations helped identify correlations between product features and prices, highlighting the best purchasing options.",

      "Machine Learning Predictions: Developed predictive models using scikit-learn to forecast laptop prices based on their specifications. Evaluated model performance using metrics like MSE and R-squared, providing actionable insights into market trends.",
    ],

  },
  // Project 7 ()
  {
    id: "project_7",
    img: "src/assets/projectThumnails/project_6.png",
    title: "Puglia Winery Case",
    summery: "Implemented Snowflake data warehouse for fast querying, developed ETL processes for data accuracy, and integrated Tableau/Power BI for interactive dashboards and advanced SQL analysis for actionable insights.",
    moduleFullTitle: "Business Intelligence System for Enhanced Product Profitability and Market Analysis (Puglia Winery Case)",
    moduleDescription: ["Data Warehousing and Modeling: Implemented a data warehouse using Snowflake, designed with one fact table and four dimensional tables to support complex queries for analyzing product profitability and market opportunities, ensuring optimal data structure for fast access and scalability.", "ETL Process Development: Created detailed ETL processes outlined in an ELT design document, including a Day 0 pipeline for loading historical data and a DayN pipeline for daily incremental updates. This setup ensures continuous data accuracy and availability.",
    "Business Intelligence Integration: Employed Tableau and Power BI to develop interactive dashboards, enabling stakeholders to visually analyze data on product lines, customer behaviors, and market trends, enhancing strategic decision-making."," Quantitative Analysis and Reporting: Conducted advanced SQL queries and data manipulations to extract key insights, providing actionable intelligence through visual reports that support business strategies and operational improvements."]

  },
  // Project 8 ()
  {
    id: "project_8",
    img: "src/assets/projectThumnails/project_7.png",
    title: "Financial Analytical",
    summery: "Analyzed Verizon's financials, highlighted key ratios, used rigorous data collection, collaborated for interpretation, applied regression analysis, and recommended strategic actions for improved capital and liquidity management.",
    moduleFullTitle: "Financial Analytical Report - Verizon",
    moduleDescription: [
      " Financial Statement Analysis: Analyzed Verizon Communications' financial statements, quantitatively assessing trends over five years. Calculated financial ratios, including a debt-to-equity ratio averaging 1.8, return on equity at 12%, and a current ratio of 0.6, providing a detailed look at the company’s financial health.",

      "Data Collection Methods: Employed rigorous data collection techniques to aggregate financial data from annual reports, SEC filings, and investor presentations. Ensured data integrity by using automated tools to cross-verify figures, reducing human error and enhancing the reliability of the analysis.",

      "Team Collaboration for Data Interpretation: Collaborated with a team of financial analysts using statistical software to interpret complex financial data, applying regression analysis and time-series forecasting to predict future financial performance and assess risk factors.",

      "Strategic Financial Recommendations: Leveraged quantitative analysis to recommend strategies for improving Verizon’s capital structure and liquidity management. Proposed specific actions such as restructuring debt and optimizing asset utilization, aimed at enhancing financial ratios and overall corporate value.",
    ],
  },
  // Project 9
  {
    id: "project_9",
    img: "src/assets/projectThumnails/project_8.png",
    title: "Business Marketing",
    summery: "Optimized customer service with multilingual kiosks, achieving 85% satisfaction. Integrated VR and digital games, reducing downtime by 30%. Targeted marketing increased engagement by 40% and foot traffic by 25%. Dynamic pricing boosted revenues by 20%, supported by financial analysis for growth..",
    moduleFullTitle: "Business Marketing Plan - Playtopia",
    moduleDescription: [
      "Customer Service and Experience: Optimized customer service by deploying user-friendly interfaces and multilingual support at kiosks, enhancing the entertainment experience for a diverse, global traveler base. Measured customer satisfaction through real-time feedback systems, achieving an 85% satisfaction rate.",

      "Technology Integration and Game Management: Integrated advanced VR technologies and a variety of digital arcade games, ensuring low maintenance with automated system updates and remote troubleshooting capabilities. This tech-focused approach reduced downtime by 30% and increased game uptime.",

      "Strategic Marketing and Promotion: Implemented targeted marketing strategies, including partnerships with airlines for promotional deals, featured airport advertising, and social media campaigns, which boosted customer engagement by 40% and increased foot traffic by 25%.",

      "Financial Management and Revenue Analysis: Developed a dynamic pricing model that adjusts game prices based on peak hours and seasonality, which maximized revenues by 20%. Conducted comprehensive financial analysis to track profitability and guide reinvestment decisions, supporting sustained business growth.",
    ],

  },

  // Project 10
  {
    id: "project_10",
    img: "src/assets/projectThumnails/project_9.png",
    title: "Crocs: Worrisome Business.",
    summery: "Crocs' sales are subject to market trends, affecting financial stability and share value. The company faces high debts and potential bankruptcy, with global economic uncertainty impacting purchases. It needs to manage receivables and inventory better to improve turnover and financial health.",
    moduleFullTitle: "Analytical Thesis on Crocs: Worrisome Business.",
    moduleDescription: [
      "Market Trend Impact: Crocs' sales are influenced by market trends, which in turn affect the company's financial stability and share value.",

      "Financial Challenges: The company is burdened with high debts and faces the risk of potential bankruptcy, exacerbated by global economic uncertainty that affects consumer purchasing behavior.",

      "Operational Improvements Needed: To enhance turnover and financial health, Crocs must better manage its receivables and inventory.",

      "Strategic Focus Required: Addressing these challenges necessitates a strategic focus on financial management and operational efficiency to stabilize and grow the business in a volatile market environment.",
    ],

  },












];
