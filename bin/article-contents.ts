export const articleContents = new Map([
  [
    "cross-cultural-teams",
    [
      [
        {
          type: "html",
          content: `<p>Working on a global product is usually accompanied with a global workforce. This post explores the dynamics of diverse work spaces.</p>`,
        },
        {
          type: "article-quote",
          quote:
            "The Japanese have a saying: ‘The nail that sticks up must be hammered down,’ implying that individualism must be crushed and frustrated. This isn’t so — individual effort and initiative are appreciated in Japanese business — but they need to be coordinated in a team effort. This means that a lot of time is spent in collective discussion, and decisions are made through the process known as nemawashi (binding the roots).",
          person: "Barry Tomalin",
          personTitle: "Lecturer in Cultural Awareness",
        },
      ],
      [
        {
          type: "html",
          content: `
                            <h1>Effective Global Teams</h1>
                            <cite>Global UX, Chapter 6, “Effective Global Teams,” pp. 99-199</cite>
                            <p>There are numerous ways to structure a global team. You may have a central location within the headquarters, or multiple branches in key markets, or even a team that is spread thinly across many different countries. It helps to hire designers who are passionate about moving to new cultures and embracing them.</p>
                            <p>Time zones adds unavoidable overhead into global communications. There is no way to completely solve this but there are ways to mitigate it:</p>
                            <ul>
                                <li>Prefer personal communication such as phone calls and video calls.</li>
                                <li>Include remote teams in all strategic.</li>
                                <li>Share the burden of joining meetings at off-hours.</li>
                                <li>Physically meet before starting work. This may be expensive, but it helps to make future collaboration much more efficient.</li>
                                <li>Be aware of cultural differences amongst teammates. Use suitable teammates as cultural bridges.</li>
                                <li>Intentionally build cross-cultural knowledge of designers. Integration within the local community helps. Integration with the global UX community also helps, such as conferences.</li>
                            </ul>
                            <p>Diverse teams tend to be more effective at innovation, perhaps because the diversity allows them to tackle problems from many perspectives. This makes the overhead described above worth it.</p>
                        `,
        },
      ],
      [
        {
          type: "html",
          content: `
                            <h1>Teams, motivation and feedback</h1>
                            <cite>Tomalin, B. (n.d.). 8. In The World's Business Cultures: And How to Unlock Them (2nd ed., pp. 115-127). Thorogood.</cite>
                            <p>Cultures have accompanying team ethics. If your team members come from different cultures, there will be a mix of team ethics, which may not mix nicely.</p>
                            <p>Team ethics can be deconstructed as follows:</p>
                            <dl>
                                <dt>Team selection</dt>
                                <dd>By expertise, seniority, loyalty, or adaptability.</dd>
                                <dt>Teamwork</dt>
                                <dd>Initiative versus consensus. Freedom to encroach outside your area of ownership.</dd>
                                <dt>Problem solving</dt>
                                <dd>Diving into identifying a solution, versus getting a good understanding for the problem, versus getting a good understanding of the root cause of the problem.</dd>
                                <dt>Motivation</dt>
                                <dd>Money,  Status, Security, Power, and Fun.</dd>
                                <dt>Feedback</dt>
                                <dd>Private versus public. Email versus in-person. Blunt versus mitigated.</dd>
                            </dl>
                        `,
        },
      ],
    ],
  ],
  [
    "how-culture-became-part-of-ux",
    [
      [
        {
          type: "html",
          content: `<p>Experiences in the field have proven that culture is a key factor of UX. In this article we look at one such example, and how the field of UX has evolved to incorporate culture.</p>`,
        },
        {
          type: "article-quote",
          quote:
            "Once developers recognize that their own patterns of rationality are not universal, there is the possibility of designing new interfaces with more appeal to those voluntarily on the opposite side of the digital divide.",
          person: "Emilie W. Gould",
          personTitle: "Rensselaer Polytechnic Institute",
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>The Ethnic Theory of Plane Crashes</h1>
                        <cite>Gladwell, Malcolm: “The Ethnic Theory of Plane Crashes” in Outliers. New York: Little, Brown and Company, 2008. Chapter 7, pp. 177-223</cite>
                        <p>It is tempting design with the happy path in mind, however this can lead to failures under extenuating circumstances.</p>
                        <p>This reading made me wonder if users see UI as their pilot (superior) or first officer (inferior)? How much mitigation should UI use to communicate? This probably depends on the tolerance to error of the task. The designer must be mindful of this and balance comfortable with error avoidance.</p>
                        <p>We can generalize populations, but we should expect individuals within these populations to exhibit variance.</p>
                        <p>Culture emerges from hundreds of years of history based on things such as political structures, religions traditions, languages, food, architecture, and literature.</p>
                        <p>Western culture is Transmitter oriented — it is the responsibility of the speaker to ensure communication is successful. Asian culture is Receiver oriented — it is the responsibility of the listener. Receiver oriented languages do not work well in extenuating circumstances because the listener does not have the attention needed to read between the lines.</p>
                        <p>If cultural values are innately unsuited for a task, look for ways to suppress the corresponding cultural behaviors. With training, individuals can change their behaviors from their cultural norms.</p>
                        <p>It is tempting to ignore cultural differences for fear of offending someone. However, ignoring our differences, our unique strengths and weaknesses, can lead to unsuitable designs.</p>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Synthesizing the Literature on Cultural Values</h1>
                        <cite>Aykin, N. (2005). Usability and internationalization of information technology. Mahwah, NJ: Lawrence Erlbaum. (Chap. 4 Gould, Emilie)</cite>            
                        <p>It is prohibitively costly to custom-tailor a product to every single culture. Instead, we classify similar groups of cultures and target these.</p>
                        <p>The field of cultural anthropology is unsuitable for informing HCI because:</p>
                        <ul>
                            <li>Results are not in a standardized cross-cultural format, which makes it difficult to convert a single experience across cultures.</li>
                            <li>They do not identify which differences are important, which prevents the designer from cheaply addressing the important differences.</li>
                            <li>Findings are oriented in comparison between the culture and the researcher.</li>
                            <li>It has historical ties to imperialistically biased research.</li>
                        </ul>
                        <p>The field of intercultural communication is suitable for informing HCI because:</p>
                        <ul>
                            <li>Results are comparative in nature, which makes it easy to morph the same product design across cultures.</li>
                            <li>It identifies the critical variables that need to be addressed, allowing the designer to make targeted changes.</li>
                            <li>In order to understand another's culture, your must first understand your personal cultural afflictions.</li>
                        </ul>
                        <p>Hall studied the following dimensions of communication within cultures: time, space, and context. The implications for web design include:</p>
                        <ul>
                            <li>Use of color.</li>
                            <li>Density of text vs. image.</li>
                            <li>Linear vs. ad-hoc task flow.</li>
                            <li>Proving context, such as branding, or social awareness.</li>
                        </ul>
                        <p>Stewart and Bennett explored cultural differences in the context of various levels of perception: innate, patterns, and metaphors. This analysis implies that application localization cannot merely consist of textual translations, but should also consider higher levels of design such as page structure and imagery connotations. A simple example of this is horizontally flipping the interface for let-to-right cultures instead of merely translating the text.</p> 
                        <p>Codon and Yousef explored a non-exhaustive set of twenty five value orientations under the intersecting categories of nature, self, and society. Implications to HCI include application defaults, degree of persuasion, representation of users to each other, and even the representation of the application's culture to users.</p>
                        <p>Hofstede explored four cultural dimensions across a very wide number of countries. He later added a fifth dimension for a subset of countries. These values are widely criticized, but also widely used. His data makes it very straightforward to examine your application in the context of another set of cultural dimensions in order to adapt it for suitability in another target market.</p> 
                        <p>Triandis approached this topic from social psychology, and redefined many existing notions, including Hofstede's dimensions. The open-minded cross-cultural approach that Triandis advocated would serve HCI well — we should ensure that our field is not building on a western-centric foundation. HIs work also suggests that more effort should be placed in developing trust from users from collectivist cultures.</p>
                        <p>Gudykunst combined intra and inter cultural communications theory. When people first meet, they try to find similarities in background, then as the relationship developers, they explore personal traits, and the need for similarity decreases. His work also explored the multiple identities that persons adopt for subgroups that they belong to. This work can be applied to the first meeting between a user and software being designed by providing sufficient similarities for users to attach to and being attuned to when the user has gained sufficient trust in the system.</p>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Culural issues in HCI</h1>
                        <cite>Isabela Gasparini , Marcelo S. Pimenta , José Palazzo M. De Oliveira, Vive la différence!: a survey of cultural-aware issues in HCI, Proceedings of the 10th Brazilian Symposium on Human Factors in Computing Systems and the 5th Latin American Conference on Human-Computer Interaction, October 25-28, 2011, Porto de Galinhas, Pernambuco, Brazil</cite>
                        <p>Internationalization instills flexibility into the technical  and design infrastructure, so that it can be cheaply adapted to various cultures.</p> 
                        <p>Localization adapts the product for a specific culture. Is successful, it will feel as if the product was developed in that culture. This goes beyond translating text — it includes changing metaphors and adapting the visual design.</p>
                        <p>With globalization, companies providing software must localize for more and more markets. At the same time, more and more individuals are becoming global citizens via physical travel, or media that crosses cultural bounds.</p>
                        <p>In High PDI cultures, websites may focus on the organization. In low PDI cultures, websites may focus on the users of the organization.</p> 
                        <p>Tables 2–6 of this reading are a great cheat sheet for adapting a website based on Hofstede's dimensions.</p>
                    `,
        },
      ],
    ],
  ],
  [
    "cultural-awareness",
    [
      [
        {
          type: "html",
          content: `<p>Global design demands cultural awareness. In this article, I look at techniques for developing cultural awareness.</p>`,
        },
        {
          type: "article-quote",
          quote:
            "Your company's culture and your company's brand are really just two sides of the same coin. The brand may lag the culture at first, but eventually it will catch up. Your culture is your brand.",
          person: "Tony Hsei",
          personTitle: "Zappos",
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>The Concept of Culture</h1>
                        <cite>Minkov, “The Concept of Culture”, Cross-Cultural Analysis (LA, London, Delhi: Sage, 2012): 9-17.</cite>
                        <p>Culture is too complicated to define, but too important to ignore. There is wide variation in definitions across scholarly circles. Notably, there is disagreement between which aspects are part of culture, and which are extraneous. For example, is the wealth of a nation a part of its culture? Pick the definition that best fits your purpose and be sure to communicate this with your findings.</p>
                        <p>When comparing cultures, you can use statistics control for objective variances in populations, such as age. The value of doing this depends on the purpose of your comparison.</p>
                        <p>Classifications of definitions of Culture:</p>
                        <dl>
                            <dt>Subjective vs. Objective</dt>
                            <dd>We can view culture as an intrinsic quality of people (subjective), or as the artifacts created by people (objective). These artifacts can be physical, such as buildings, and also intangible, such as marriage structures.</dd>
                            <dt>Behaviors vs. Meanings</dt>
                            <dd>We can view culture as behaviors exhibited by a group, or by the meanings of those behaviors. The latter view has gained popularity.</dd>
                            <dt>Independent vs. Human</dt>
                            <dd>These classifications disagree on whether culture should be studied in context of humans, or as an independent phenomenon.</dd>
                            <dd>The disagreement is not about the uniqueness of culture to mankind. It is about whether humans are capable of studying it independently from human contexts.</dd>
                        </dl>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Culture and UX</h1>
                        <cite>Quesenbery, W., &amp; Szuc, D. (2012). Global UX: Design and research in a connected world. Waltham, MA: Morgan Kaufmann (Chapter 3)</cite>
                        <p>Culture is best understood comparatively.</p>
                        <p>Culture changes more slowly than other aspects that we design for (eg. governance, infrastructure, commerce &amp; fashion).</p>
                        <p>Strong cultural factors:</p>
                        <dl>
                            <dt>Nationality</dt>
                            <dd>Where someone grew up. The time period is also important. Be mindful of nationalities with a vast array of sub-cultures, the diluting effect of globalization, and the possibility that individual interests can overrule the effect of national culture.</dd>
                            <dt>Technology</dt>
                            <dd>What technological environment someone grew up in.</dd>
                            <dt>Company</dt>
                            <dd>Companies, or industries, can develop strong cultures.</dd>
                        </dl>
                        <p>Language and cultural issues easily go by undetected by outsiders. Identifying and solving these require an intentional effort. This effort should be phased — use cheap research methods to weed out the bulk of issues, then use extensive methods for completeness.</p> 
                        <p>Some sources of UX issues are easier to predict than others. In increasing order of difficulty: task completion, infrastructure, legal, market, language, and finally, culture.</p>
                        <p>Hofstede has five dimensions for classifying cultures. It is the most popular model for doing this, but has been met with mixed reactions. Regardless of its accuracy, it is a good mental framework to build upon.</p>
                        <p>Language will be just as nuanced as culture, and you'll have to understand them both for a successful design.</p>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Building Your Cultural Awareness</h1>
                        <cite>Quesenbery, W., &amp; Szuc, D. (2012). Global UX: Design and research in a connected world. Waltham, MA: Morgan Kaufmann (Chapter 4)</cite>
                        <p>The following attitudes are helpful in developing global awareness:</p>
                        <dl>
                            <dt>Constant challenges</dt>
                            <dd>Embrace new and foreign concepts.</dd>
                            <dt>Curiosity</dt>
                            <dd>Approach new experiences with naivete</dd>
                            <dt>Humility</dt>
                            <dd>Learn from others. Do not assume your way is best.</dd>
                        </dl>
                        <p>Immersion refers to a deep understanding of another's perspective. It goes beyond being able to objectively describe another culture. It involves being able to actually experience that culture like a local. Immersion allows you to accurately interpret User Research, and effectively communicate your findings. The following actions are helpful in developing immersion:</p>
                        <dl>
                            <dt>Time</dt>
                            <dd>Spending an extended amount of time in a place. It is unclear if this is months, years, or a lifetime.</dd>
                            <dt>Local customs</dt>
                            <dd>Follow and respect the local customs. Don't hang out with expats. Go far from the city center if needed.</dd>
                            <dt>Language</dt>
                            <dd>Learn the language. Aside from the utility of easy communication, the language reveals cultural subtleties.</dd>
                            <dt>Proxy</dt>
                            <dd>As a last resort, if you're unable to travel, you can get to know someone who originates from that culture, or even someone who has been thru the immersion process in that culture. Be mindful that the person's experiences may be reflective of an older time period of that culture.</dd>
                        </dl>
                    `,
        },
      ],
    ],
  ],
  [
    "developing-for-emerging-economies",
    [
      [
        {
          type: "html",
          content: `<p>Companies are increasingly expanding into untapped markets of emerging economies. This post reflects on the successes and failures of a few of these endeavours.</p>`,
        },
        {
          type: "article-quote",
          quote:
            "The usual approach is to strip the product of features until a semblance of affordability is attained. The trouble is that the emerging consumer, for whom every act of discretionary consumption is an act of sacrificing something essential, is looking to be seduced rather than patronized",
          person: "Santosh Desai",
          personTitle: "FutureBrands CEO",
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Engineering Reverse Innovations</h1>
                        <cite>Govindarajan, A. W. (2016, November 03). Engineering Reverse Innovations. Retrieved February 18, 2017, from https://hbr.org/2015/07/engineering-reverse-innovations</cite>
                        <p>Innovation typically focuses on developed markets, and successful products are later adapted for emerging markets. In reverse innovation, this order is reversed.</p>
                        <p>Reverse innovation often fails because the innovation team is experienced with consumers from developed markets, and unable to produce designs that are suitable for consumers from emerging markets.</p>
                        <p>Here are some tips to solve this problem:</p>
                        <ul>
                            <li>Do not set a target price of 50% for an equivalent product in the developed world. This is still too high for most consumers in emerging markets, and the few that can afford it will likely want the high end 100% price version. Aim for a 10% price target instead.</li>
                            <li>Do not start with an existing product and look for a suitable market. Instead, start with a market, invest time in understanding the needs of that market, and then design a new solution to meet those needs.</li>
                            <li>Do not focus on cost when eliminating features. Consider the features of the target market, and take advantage of the freedoms that they afford.</li>
                            <li>Perform thorough technical feasibility analysis.</li>
                            <li>Test the idea with all stakeholders — This includes the user, the purchaser, and any organization that will be administering the product.</li>
                        </ul>
                        <p>Emerging markets are gaining dominance of the global market. Companies ought to invest in expertise in emerging markets in order to ensure future relevance. One thing that makes this easy is the abundance of cheap engineers in those markets.</p>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Global Product Design</h1>
                        <cite>Sathikh, P. M., &amp; Kumar, S. A. (2009). Transitive Culture: How ‘Global’ Product Design is Changing User Behavior. 3rd International Conference on Integrity, Reliability and Failure.</cite>
                        <p>In globalization, products are designed by the developed world and sold into developing countries as is. The result is similar to colonization, in which the dominant culture infected other cultures. This paper examines this cultural effect.</p>
                        <p>When a local culture adopts new technology designed for a foreign culture, locals are forced to adapt their behaviors to use the new technology. These new behaviors lead to a change in the culture, which is called transitive culture.</p>
                        <p>Advocates for globalization laud the efficiency of design and production if we treat the world as homogeneous. In fact, they suggest using homogeneous products to train the world to be homogeneous. This approach focuses on the similarities of cultures. However, this overlooks the deep emotional differences that affect usage and purchase decisions, and it also wrongly assumes that differences in cultures can be dissolved quickly.</p>
                        <p>Interesting examples:</p>
                        <dl>
                            <dt>India</dt>
                            <dd>Washing machines used to make lassi, a local mango-yogurt</dd>
                            <dt>India</dt>
                            <dd>Mobile phones used to facilitate or even replace traditional rituals</dd>
                            <dt>India</dt>
                            <dd>Mobile phones and internet downloads used for movies and shows</dd>
                            <dt>Japan</dt>
                            <dd>Mobile phones used to create a new form of literature, Ketai</dd>
                            <dt>Uganda</dt>
                            <dd>Mobile phones for transferring airtime as a currency</dd>
                        </dl>
                        <p>The authors believe that new technologies will impact the behavior of consumers, but not their core cultural assumptions.</p>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>The Washing Machine that Ate my Sari</h1>
                        <cite>Apala Lahiri Chavan , Douglas Gorney , Beena Prabhu , Sarit Arora, COVER STORY The washing machine that ate my sari---mistakes in cross-cultural design, interactions, v.16 n.1, January + February 2009</cite>
                        <p>The global market has developed into a lucrative size. This is due to emerging markets — those that have middle class that is significant enough to attract exports from developed markets.</p>
                        <p>Designing a product for an emerging market requires a deep understanding of the culture, and this is a demanding endeavor. A practical and effective solution is to employ local designers who already have local understanding.</p>
                        <p>The price segmentation will be very different from those in developed countries. Aligning with a natural segmentation is critical for success. In addition to price segments, focus on what features are important, rather than what features can be eliminated to lower the price.</p>
                        <p>Understanding the constraints and capabilities of the local infrastructure is also crucial. This includes payment methods, internet connectivity, and power reliability.</p>
                        <p>The design methodologies that we're used to were developed and tested mainly in developed countries. They may not be effective in emerging markets. Designers have to be flexible and creative and adapt design methodologies to ensure effectiveness.</p>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>How P&amp;G brought the diaper revolution to China</h1>
                        <cite>Frazier, M. (2010, January 07). How P&amp;G Brought the Diaper Revolution to China. Retrieved February 18, 2017, from http://www.cbsnews.com/news/how-pg-brought-the-diaper-revolution-to-china</cite>
                        <p>P&amp;G entered the disposable diaper market in China in 1998. No one in China used disposable diapers at the time. P&G's strategy was to create a cheap version of the US diaper. This failed. The diaper was inferior in quality. Customers in both developing and developed countries avoid inferior quality.</p>
                        <p>P&amp;G updated their strategy. They kept cost low by using new technology, and more efficient production mechanisms. They found out that Chinese mothers craved sleep,  and they delivered a campaign that targeted this. They also played on the academic development of the baby, which is also valued in Chinese culture. This strategy succeeded.</p>
                    `,
        },
      ],
    ],
  ],
  [
    "information-architecture-101",
    [
      [
        {
          type: "html",
          content: `<p>Information Architecture (IA) is focused on making information findable and  understandable. This note summarizes the first few chapters of a book on this topic.</p>`,
        },
        {
          type: "article-quote",
          quote:
            "IA done in a vacuum without regard for users  won’t hold up against the light of day. The design must be informed by the  user’s tasks, needs, navigation behavior, and experience",
          person: "L. Rosenfeld, P. Morville, J. Arango",
          personTitle: "Authors of the book summarized in this post",
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Introduction</h1>
                        <cite>Rosenfeld, L., Morville, P., & Arango, J. (2015). Information architecture: for the web and beyond. Sebastopol (CA): OReilly Media.</cite>
                        <p>Information Architecture (IA) is focused on making information findable and  understandable. IA does this by categorizing, organizing and labeling the  site’s information.</p>
                        <p>IA manifests in multiple affordances on the website, including the header, search (external + internal), and hyperlinks.</p>
                        <p>IA done in a vacuum without regard for users  won’t hold up against the light of day. The design must be informed by the user’s tasks, needs, navigation behavior, and experience.</p>
                        <p>IA must balance the need of the user with the needs of the business.</p>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Finding</h1>
                        <p>Searching for something you know exists is involves a very different behavior than browsing for the unknown. Scenarios for both behaviors should inform the design of our IA.</p>
                        <p>Information seeking behaviors are complex. The basic building blocks are searching, browsing, and asking. A single information finding session will realistically comprise of a combination of these, and multiple iterations.</p>
                        <p>One great way to learn what your users are looking is search analytics — reviewing the most common search queries on the site.</p>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Understanding</h1>
                        <p>Each category of websites (bank, store, etc.) has evolved a typology — an AI design that users have come to expect for this type of website. Adhering the typology for online stores will make it easy for customers to understand our environment. Working against a standard structure also offers us an elegant way to differentiate from our competitors; small changes to a standard structure stand out.</p>
                        <p>Users get used to the core structures of a site's IA, and become disoriented when they change. Design the core IA with the future in mind so that it won't have to change often. When changing the core IA, keep your habitual users in mind - they've grown used to it and are likely to be disoriented One way to manage this is by separating parts of the environment that have different rates of change.</p>
                        <p>If you've got subsites that are very different, it is possible that they ought to have very different IA designs. Segmenting these subsites allows you to design the sub-IA that is best for each subsite, instead of imposing a compromised one-size-fits-all design for all your subsites. For example, "ebay Motors" has an IA that is significantly different from the rest of eBay.</p>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Anatomy of IA</h1>
                        <p>You can approach IA top-down, or bottom-up.</p>
                        <p>The top-down approach starts by asking "What does the user need?", and then by creating a structure that answers this question. This approach was dominant in the earlier days of websites, since most websites were being created from scratch. However dynamic content, and the rise of search engines has led to the prominence of the bottom-up approach. A search-engine user may land directly on your PDP, bypassing your website's homepage, product family pages, etc.</p>
                        <p>The bottom-up approach assumes that your user starts from content in your IA (such as a PDP page), and allows the user to traverse the IA from there (such as related products).</p>
                        <p>Internal search also exposes invisible IA: hand-curated results, and relevancy algorithms are both critical tools thru which users find your website's information.</p>
                        <p>There are four broad categories of IA components. We will dive into these later:</p>
                        <dl>
                            <dt>Organization system</dt>
                            <dd>Categorization of information</dd>
                            <dt>Labeling system</dt>
                            <dd>Representation of information</dd>
                            <dt>Navigation systems</dt>
                            <dd>Traversal of information</dd>
                            <dt>Searching systems</dt>
                            <dd>Directly searching for information</dd>
                        </dl>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Organization</h1>
                        <p>Organization refers to the grouping of similar items, and the creation of hierarchical relationships between these groups. This is usually represented by the tree diagrams that IA is known for. Organization helps users to locate information, and provides context that helps users to interpret information.</p>
                        <p>There are some common challenges to organization:</p>
                        <dl>
                            <dt>Ambiguity</dt>
                            <dd>Information may belong in multiple groups. With a digital website, we have the leisure of duplicating information into multiple group. However, too much duplication can dilute the value of a classification scheme.</dd>
                            <dt>Heterogeneity</dt>
                            <dd>A collection of objects that are unrelated and incomparable. Unlike homogenous data, which consists of like items and can be classified easily.</dd>
                            <dt>Differences in perspectives</dt>
                            <dd>
                                Site owners and site users have very different perceptions on a website. The site owner may be biased by the hierarchical structures of the corporation, and must ensure that this does not leak into the IA, since the user does not think in terms of the corporate identity.
                                <br/><br/>
                                Various groups of site users will also have different perceptions. You won't be able to craft one IA that is optimized for all of these intended audiences. You may need to provide multiple navigation pathways for important audiences.
                            </dd>
                            <dt>Internal politics</dt>
                            </dd>The IA is intended for users, but it also impacts the internal perception of the importance of various teams. A team is likely to resist an IA in which their work is not highly visible, even if it is in the best interest of the user.</dd>
                        </dl>
                        <p>Organization consists of organization scheme, and organization structure.</p>
                        <h2>Organization Scheme</h2>
                        <p>Organization scheme is the shared characteristics of a group of similar items. Organization scheme is used to define groups, and to order the items that they contain.</p>
                        <h3>Exact schemes</h3>
                        <p>Exact schemes divide information into perfectly defined and mutually exclusive groups. For example, you may organize countries into 26 groups of alphabetical groups. One issue with this scheme is that the user must know exactly what they're searching for (i.e. known-item seeking). All exact schemes share this pitfall. Common exact schemes are alphabetical, chronological, and geographical.</p>
                        <h3>Ambiguous schemes</h3>
                        <p>Ambiguous schemes divide information into categories that may be ambiguous and subjective. These schemes are more difficult to design and maintain, but tend to be more useful than exact schemes especially when the user isn't sure what they're looking for (i.e. exploratory seeking).</p>
                        <p> Here are the most common schemes</p>
                        <ul>
                            <li>Topical (e.g. Amazon's departments).</li>
                            <li>Task-oriented (e.g. Office's ribbon).</li>
                            <li>Audience-specific (e.g. "For work", "For home", "For school").</li>
                            <li>Metaphor (e.g. Your desktop with folders, files & the recycle bin). Metaphors are constraining, and difficult to expand, so this scheme is used sparingly.</li>
                            <li>Hybrid (a mixture of the above schemes). It is dangerous to do this because your user will be presented with groups that overtly overlap. This is usually on the successful when used at a high layer of the organization (e.g. homepage), and restricted to the top set of groups/tasks.</li>
                        </ul>
                        <h2>Organization Structure</h2>
                        <p>Organization structure is the relationships between the groups defined by the above organization scheme. It dictates the primary ways in which users can navigate. We will discuss 3 major organization structures that can be used in isolation, or with each other:</p>
                        <ul>
                            <li>Hierarchy — a top-down approach</li>
                            <li>Database model — a bottom-up approach</li>
                            <li>Hypertext</li>
                        </ul>
                        <h3>Hierarchy — a top-down approach</h3>
                        <p>These are ubiquitous and successful because humans have grown familiar with hierarchies. This allows Information Architects to design in a familiar medium, and end-users to consume the familiar hierarchical structure.</p>
                        <dl>
                            <dt>Ambiguity</dt>
                            <dd>when designing the hierarchy, strive for mutually exclusive schemes. Avoid cross listing an item under multiple groups. Realistically this will not be possible; a controlled number of exceptions may be beneficial but going overboard can render the hierarchy meaningless.</dd>
                            <dt>Breadth & Depth</dt>
                            <dd>
                                Excessive breadth is difficult to scan, and users are shocked with a lack of content as they navigate deeper into the hierarchy.
                                <br/><br/>
                                Excessive depth leads to an inordinate amount of navigation to locate information, and many users will simply leave your website.
                                <br/><br/>
                                When designing a new environment, lean towards broad-and-shallow which allows you to expand without major restructuring.
                            </dd>
                        </dl>
                        <h3>Database model — a bottom-up approach</h3>
                        <p>If your information is stored in a database, then there is a rich metadata schema already associated with it. Take advantage of this metadata to enable the automatic generation of indices, see also links, fielded searching, and advanced filtering and sorting of search results.</p>
                        <h3>Hypertext</h3>
                        <p>This refers to a highly ad-hoc and nonlinear structure. This provides flexibility for useful relationships between items and groups in the hierarchy. However, if a user primary uses hypertext for navigation, the user doesn't get a feel for the lay of the land, and doesn't develop a mental model of the site's structure. For this reason, hypertext should rarely be the primary organization structure, but it can be complementary.</p>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>The Book</h1>
                        <p>
                            This is a summary of the first half of the book. The book continues to go into more detail than I needed. If you need those details, I highly recommend giving it a read:
                            
                            <a href="http://shop.oreilly.com/product/0636920034674.do">Information Architecture — For the Web and Beyond, by O'Reilly Media</a>
                        </p>
                        
                    `,
        },
      ],
    ],
  ],
  [
    "global-user-research",
    [
      [
        {
          type: "html",
          content: `<p>Global User Research is hard. In this post, we look at tips from seasoned veterans for conducting an insightful global user study, and delivering compelling results to the product team.</p>`,
        },
        {
          type: "article-quote",
          quote: "Let them teach you",
          person: "Global UX (Chapter 7)",
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Research in the Field</h1>
                        <cite>Global UX, Chapter 7, “Research in the Field,” pp. 121-53.</cite>            
                        <p>In this chapter, we learn to successfully execute global research.</p>
                        <h2>Goals</h2>
                        <p>Set explicit goals to ensure an actionable deliverable. If the project is long, create milestones and corresponding goals.</p>
                        <p>Select cultural regions to research based on:</p>
                        <ul>
                            <li>existing market share</li>
                            <li>target market share</li>
                            <li>obtaining data from a diverse set of cultures</li>
                        </ul>
                        <p>Field studies are more expensive and time-costly than lab studies, however they are the best tool for discovering deep cultural insights.</p>
                        <h2>Logistics</h2>
                        <p>Use your goals to determine which regions you need to travel to. Note that you may be able to use technology to successfully deliver some goals without physical travel. This approach allows you to objectively request travel provisions from your company.</p>
                        <p>Pick just enough participants to generate accurate results. Picking more than this will limit your time per participant, and lead to lower quality results. Be prepared for clients or companies who do not understand this trade off and ask you to inflate the number of participants arbitrarily.</p>
                        <p>Adjust your logistical requirements for different cultural regions. For example, attitudes towards tardiness and honest communication will vary across cultural regions. If these are unaccounted for, you expose your study to the risk of failure.</p>
                        <p>Allocate time for data analysis.  This is especially necessary if analysis is performed by a diverse set of researchers, each of which bringing their inherent cultural biases.</p>
                        <p>Start with an activity that immerses you into the culture. This will create some cultural awareness that will help you to interpret the data accurately.</p>
                        <h2>Methodology</h2>
                        <p>The following factors are effective in exposing deep and accurate insights:</p>
                        <ul>
                            <li>Flexibility in methodology execution</li>
                            <li>Observational, or open-ended methodologies</li>
                            <li>Performing research at the start of the product design cycle</li>
                            <li>Triangulating results between a diverse set of methodologies</li>
                            <li>Performing research in a real environment</li>
                        </ul>
                        <p>Consult existing research before performing you own research. If you work for  large company, relevant studies may already exist and can help you improve your study.</p>
                        <p>Avoid focus groups. The inaccurate effects of group think occur. The environment is also far from real, so accuracy suffers again.</p>
                        <p>Remote methods lack immersion and will not be as effective at exposing deep insights. However, it will cheaply allow your data to draw from a very diverse set of participants.</p>
                        <h2>Team</h2>
                        <p>The most effective global researchers are those that are passionate about learning the target culture.</p>
                        <p>Including non-researchers builds empathy for the users, the research study, and research in general. This helps ensure that the research results are embraced and incorporated into the product. These principles also extend to including local representatives in a multi-national company.</p>
                        <h2>Field Preparation</h2>
                        <p>Question your inherent assumptions in order to widen the breath of your interpretation.</p>
                        <p>Consult local resources before travelling to the field:</p>
                        <ul>
                            <li>Revisit your own research history and life experiences</li>
                            <li>Interview friends from the target culture</li>
                            <li>Dive into existing literature for factual information</li>
                        </ul>
                        <p>Ensure that all researchers are prepared.</p>
                        <h2>Field Work</h2>
                        <p>Do not fall into the trap of quantity over quantity. A realistic pace, and sufficient down time will ensure quality research.</p>
                        <p>Field work is conducive to developing camaraderie within the research crew.</p>
                        <h2>Easy Points of Failure</h2>
                        <ul>
                            <li>Researchers who have not been trained in getting participants to open up. This skill rarely comes naturally.</li>
                            <li>Recruitment materials that are misunderstood.</li>
                            <li>Non-expert translations.</li>
                        </ul>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Bringing It Home</h1>
                        <cite>Quesenbery, W., &amp; Szuc, D. (2012). Global UX: Design and research in a connected world. Waltham, MA: Morgan Kaufmann (Chaper 8)</cite>
                        <h2>Collecting you research results</h2>
                        <p>Each researcher had a unique part of the journey, which will lead to unique interpretations. Converge these interpretations into a shared cohesive understanding.</p>
                        <p>Create daily conclusions of your research and share this with the rest of the research team. This will improve the next day's research, and make it easier to create the final conclusion.</p>
                        <p>Flesh out the conclusion before splitting up to work individually, especially if the team is geographically spread. The initial phase of the conclusion demands tight collaboration.</p>
                        <h2>Communicating your research results</h2>
                        <p>Engage the audience in activities that immerses them into the research material.</p>
                        <p>Allow the audience to browse the research material and their own pace, and be there to discuss their thoughts.</p>
                        <h2>Communication mediums</h2>
                        <p>Photographs are great at capturing feelings that would be difficult to verbalize. You do not need a professional photographer, anyone on the research team can capture telling images. Sometimes the subject of the image may not be the subject of your photograph.</p>
                        <p>Videos are compelling, but they're time consuming to create, share, and view.</p>
                        <p>Sketches allow you to add intentional emphasis to certain elements. Like photography, it does not take specialized skill to create an effective sketch.</p>
                        <p>Personas allow you to present a detailed description of users. This protects the privacy of your research participants. They reveal differences between your users. They allow the product team to think of new solutions for unmet user needs.</p>
                        <h2>Follow thru</h2>
                        <p>Ensure that the results are incorporated into the product. Refer back to the research during the ideation phase.</p>
                    `,
        },
      ],
    ],
  ],
  [
    "global-design",
    [
      [
        {
          type: "html",
          content: `<p>Great global user research does not automatically translate into a successful product. Design and engineering processes must also be globally-oriented so that they can address any cultural issues that arise.</p>`,
        },
        {
          type: "article-quote",
          quote:
            "It is arrogant of us to think we can create images that will have the same precise meaning to everyone everywhere.",
          person: "William Horton",
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Design for a Global Audience</h1>
                        <cite>Quesenbery, W., &amp; Szuc, D. (2012). Global UX: Design and research in a connected world. Waltham, MA: Morgan Kaufmann (Chaper 9)</cite>
                        <p>The following steps can globalize your regular UX process:</p>
                        <h2>Make globalization a part of your plan</h2>
                        <p>Your product should be well designed for each market that you're considering. It should feel as if it was designed by people from that market. Make this part of your success criterion.</p>
                        <p>Without leaving your desk, you can get factual information for markets that will identify ways in which your product needs to adapt.</p>
                        <p>Internationalization should be a technical deliverable. This ensures that the built product has the standard plumbing required for localization.</p>
                        <p>Perform a cultural audit of the experience. Look for both commonalities and differences in visuals and metaphors.</p>
                        <p>Obtaining and maintaining localized content can be daunting. Plan for it.</p>
                        <h2>Define your global strategy</h2>
                        <p>Decide which markets will be targeted, and any associated priorities. This will lead to a focused globalization effort with a higher return of investment.</p>
                        <p>Identify the extent to which the product will be adapted individual markets.</p>
                        <h3>Little adaptation</h3>
                        <p>This approach is suitable if:</p>
                        <ul>
                            <li>Primary markets are culturally similar</li>
                            <li>A specific culture is a part of the product's appeal</li>
                            <li>Adaptions are financially prohibitive</li>
                        </ul>
                        <p>With this approach, your efforts are focused on ensuring that the same product works well everywhere. Disadvantages include an overly compromised design, and the inability to exploit local nuances.</p>
                        <h3>Moderate adaptation</h3>
                        <p>This approach is suitable if:</p>
                        <ul>
                            <li>The product is coupled with the local environment</li>
                            <li>Global branding is important</li>
                            <li>The high-level workflow is similar across cultures</li>
                            <li>The low-level workflow is different across cultures</li>
                        </ul>
                        <p>With this approach, a central global UX team has to deliver templates that ensure the right balance between consistency and flexibility. These templates must communicate a consistent brand while being flexible enough to perform in every market. Local UX teams use these templates to build locally appropriate products.</p>
                        <h3>Heavy adaptation</h3>
                        <p>This approach is suitable if the product is:</p>
                        <ul>
                            <li>Centered around the local environment</li>
                            <li>Regulated by local laws</li>
                        </ul>
                        <p>This allows local teams to optimize the product for their culture at the cost of diluting the global brand.</p>
                        <h2>Don't underestimate language</h2>
                        <p>There's much more to language than mere translation. There are UI implications, political nuances, legal requirements, local variants, and tonal nuances.</p>
                        <h2>Local research</h2> 
                        <p>Perhaps most obvious, you have to perform local research to discover all of the nuances of your product's experience in each culture you target.</p>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Graphics: The Not Quite Universal Language</h1>
                        <cite>W. Horton, “Graphics: The Not Quite Universal Language,” in Usability and internationalization of information technology. N. Aykin, Ed Mahwah, NJ: Erlbaum. (Chap. 6)</cite>
                        <p>Graphics transcends cultures easier than words. However, it isn't as universal as many assume.</p>
                        <p>Graphics reduces the cost of expensive and erroneous localization of words. It helps users to understand, especially non-native language users. Globalization has provided a wealth of symbols to use to create effective graphics.</p>
                        <p>It is impossible to craft a well-designed universal product. It is too expensive to localize a product to every cultural flavor. One pragmatic approach is to first apply universal design as much as possible — globalization — and then localize what is left.</p>
                        <p>For the first step, globalization, you must use globally objects and be as literal as possible. If you need to illustrate people keep it abstract, and avoid alienating groups.</p>
                        <p>For the second step, localization, a good ballpark is to translate 3% to 5% of your graphics. There are many best-practices you can adopt to make it easy and efficient to localize your graphics.</p>
                        <p>This reading is dense with small valuable tips. Summarizing does not do it justice. Refer to the full text if you're ever working on graphics.</p>
                    `,
        },
      ],
    ],
  ],
  [
    "search-engine-optimization-101",
    [
      [
        {
          type: "html",
          content: `<p>Search engine optimization (SEO) is now a critical ingredient of website design. This post summarizes a paper that discusses a broad range of SEO techniques.</p>`,
        },
        {
          type: "article-quote",
          quote:
            "The rewards of improving search ranking can entice site owners to engage in questionable “black hat” techniques to trick the search engine into boosting their site’s rank. However, search engines are mature enough to detect such efforts, and may penalize the site with lower rankings or exclusion from the search results.",
          person: "John B. Killoran",
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Background</h1>
                        <cite>Killoran, J. B. (2013). How to Use Search Engine Optimization Techniques to Increase Website Visibility. IEEE Trans. Profess. Commun. IEEE Transactions on Professional Communication, 56(1), 50-66.</cite>
                        <p>Search engines aim to rank websites based on authenticity, topicality, quality, and popularity. To do this, they employ a set of rules that have two general classes:</p>                    
                        <dl>
                            <dt>Trust</dt>
                            <dd>an assessment of a site’s authority and reputation</dd>
                            <dt>Relevance</dt>
                            <dd>how well a site topically matches a query</dd>
                        </dl>
                        <p>These rules are known to suffer from  “rich-get-richer” predispositions that perpetuate already highly-ranked sites, and makes it hard for newer or less popular sites to gain rank.</p>
                        <p>The rewards of improving search ranking can entice site owners to engage in questionable “black hat” techniques to trick the search engine into boosting their site’s rank. However, search engines are mature enough to detect such efforts, and may penalize the site with lower rankings or exclusion from the search results.</p>
                        <p>Users tend to stay within the first page of search results, or even just the first few results.</p>
                        <p>Three agents can affect search rank:<p>
                        <ul>
                            <li>Search behavior of users</li>
                            <li>Keywords on the website</li>
                            <li>Inbound links from other websites</li>
                        </ul>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Search behavior of users</h1>
                        <p>The following user factors affect search ranking<p>
                        <dl>
                            <dt>Click-through rate (CTR)</dt>
                            <dd>If users click on a result often, the result’s ranking will improve.</dd>
                            <dt>Bounce rate</dt>
                            <dd>If users click on a result, but end up returning to the search engine to try other results, the result’s ranking will decrease. This behavior indicates that the user was unsatisfied with the initial result.</dd>
                        </dl>
                        <p>Websites should therefore ensure that their descriptions featured on search engines are compelling to increase the CTR, and accurate to decrease the bounce rate.</p>                    
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Keywords on the website</h1>
                        <p>Use the vocabulary of the intended audience. It is tempting to use the vocabulary of experts, but this isn’t the vocabulary that users will be using to search for the site.</p>
                        <p>Searchers most often include the following in their search:</p>
                        <ul>
                            <li>The kind of service they seek</li>
                            <li>The geographical location</li>
                        </ul>
                        <p>Ensure that you have keywords for these queries.</p>
                        <p>Google Trends shows the popularity of a query over time. Use this to discover the most popular search terms for your topic, and use them as keywords.</p>
                        <p>Google’s Keyword Tool shows related keywords and phrases for keywords. Use it to discover related keywords and phrases to use as keywords on your site.</p>
                        <p>Research the keywords used by your competitors sites, and target those keywords on your own site if relevant.</p>
                        <p>Target some niche keywords where competition is less intense in order to create differentiation and capture a subset of the search audience.</p>
                        <p>Especially effective locations for keywords are:</p>
                        <ul>
                            <li>The &lt;title&gt; HTML tag — a short title that focuses on one or two keywords is best.</li>
                            <li>The URL’s path (separated by hyphens).</li>
                        </ul>
                        <p>Note that ranking is a cumulative calculation, so doing both of the above is even more effective.</p>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Inbound links from other websites</h1>
                        <p>External websites that link to your site increases your site’s ranking. The quality of these inbound links matter, and include:</p>
                        <ul>
                            <li>The authority of the linking source</li>
                            <li>The topical relevance of the linking source to your site</li>
                        </ul>
                        <p>Strategies to earn inbound links:</p>
                        <ul>
                            <li>Create high-quality, useful content that will induce others to link to it.</li>
                            <li>Provide a useful product or service.</li>
                            <li>Post new, insightful, entertaining information.</li>
                            <li>Maintain a blog with regular, original, interesting posts.</li>
                            <li>Work directly with other sites to get inbound links.</li>
                            <li>Offer to write a guest post on another site in exchange for an inbound link.</li>
                            <li>Join relevant associations that posts links to their members.</li>
                            <li>Engage the media.</li>
                            <li>Optimize for social media.</li>
                            <li>Post content that can be shared via Tweets and Facebook. These should be accompanied with one-button affordances to share.</li>
                            <li>Post content directly to social media sites. Currently Twitter links seem to have the most impact to search rank, followed by Facebook links.</li>
                        </ul>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Constant Change</h1>
                        <p>Lastly, these techniques are constantly evolving because search engines are constantly changing their algorithms. This forces siteowners to keep up to date with the changes in order to maintain their search ranking.</p>
                    `,
        },
      ],
    ],
  ],
  [
    "language-power",
    [
      [
        {
          type: "html",
          content: `<p>Localization and translation are standard for global products. This post explores power dynamics between languages that translators should be mindful of.</p>`,
        },
        {
          type: "article-quote",
          quote:
            "However great our future writers may be, their fame will never succeed in crossing beyond our borders … And so I would like to suggest to the public spirited men of the world that they engage themselves in the writing of English … In this day and age, it is self-evident that a man with great ambitions should study English writing. Study it, and strive, by using the language, to make his glory shine abroad. There is nothing great about a fame solely garnered in the context of this pathetic string of islands",
          person: "Editorialist",
          personTitle: "Yomiuri Shimbun (Japanese daily newspaper)",
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>How Many Words Do We Have For Coffee</h1>
                        <cite>David Bellos, Is That a Fish in Your Ear? Faber and Faber, NY, 2011 (Chapter 14)</cite>
                        <p>With few exceptions, today's languages exhibit strong signs of a shared genealogy.</p>
                        <p>Von Humboldt concluded that different languages lent themselves to different mental frameworks. Languages could not be perfectly translated because they evolved to support different mental frameworks. Initially scholars believed that foreign languages were primitive and supported inferior thought. Notably, the inability of abstract thought.</p>
                        <p>Edward Sapir changed this view, by asserting that languages were all equal, and evolved to support their unique environments. Sapir showed that primitive languages were just as complex as civilized languages, albeit in different aspects.</p>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Bibles and Bananas</h1>
                        <cite>David Bellos, Is That a Fish in Your Ear? Faber and Faber, NY, 2011 (Chapter 15)</cite>
                        <p>Power differences between populations can affect how their languages are translated. Power differences change over time and a corresponding change in translation mechanics is to be expected.</p>
                        <p>When translating to a more powerful language, the translated content is adapted to conform to the more powerful language. When translating to a less powerful language, the target language is adapted to conform to the material being translated. Over time, this leads to the introduction of artifacts from more powerful languages into less powerful languages.</p>
                        <p>The translation of the Bible was a notable exception to this rule. Eugene Nida, who oversaw many translations of the Bible, was interested in getting the message of the Bible to masses of new populations, and this would only be possible if the text was easily understood by the masses.</p>
                        <p>When translating a concept that does not exist in the target language, there are various approaches:</p>
                        <dl>
                            <dt>Foreignism</dt>
                            <dd>Add new words to the target language</dd>
                            <dt>Calque</dt>
                            <dd>Combine words that already exist in the target language</dd>
                            <dt>Semantic Expansion</dt>
                            <dd>Reuse an existing word from the target language</dd>
                            <dt>Cultural Substitution</dt>
                            <dd>Change the source to be translatable while preserving intent</dd>
                        </dl>
                        <p>Translators who speak the target language since childhood can pick up on unintended consequences in translations that other translators will easily miss.</p>
                        <p>Nida's approach is great for translation for informal communication. However, it does not work well in scenarios that demand accuracy, such as scholarly endeavors.</p>
                    `,
        },
      ],
      [
        {
          type: "html",
          content: `
                        <h1>Global Flows</h1>
                        <cite>David Bellos, Is That a Fish in Your Ear? Faber and Faber, NY, 2011 (Chapter 19)</cite>
                        <p>Translations regularly happen between about 50 languages. These are read by a large proportion of the world — not necessarily because they read it natively, but merely because it belongs to this list.</p>
                        <p>Translations per language are not proportional to the number of speakers of that language. It is associated with power relationships, but often in surprising ways. English is currently dominant. Most translations are from English into other languages, and very few translations into English itself. This is different from the dominance that Latin once enjoyed, where there was no need for translation since anyone with ambition was expected to learn Latin.</p>
                        <p>After English, French and German dominate. Most publishers are from Britain, the US, France, and Germany. </p>
                        <p>Many people publish in English even if it is not their native tongue. They see this as a prerequisite for global adoption of their work.</p>
                    `,
        },
      ],
    ],
  ],
  [
    "about",
    [
      [
        {
          type: "html",
          content: `                
                    <p>I'm <a href="https://www.linkedin.com/in/vivmaha">Vivek Maharajh</a> — a Developer and UX Designer.</p>
                    <p>I designed and coded this site to:</p>
                    <ul>                    
                        <li>Practice UX Design</li>
                        <li>Stay in touch with the dev client and server ecosystems</li>
                    </ul>
                    <p>Being able to organize my notes on this site was a nice bonus.</p>
                    <p><a href="https://github.com/vivmaha/blog">Client code on GitHub</a></p>
                    <p><a href="https://github.com/vivmaha/blog">Server code on GitHub</a></p>
                `,
        },
      ],
    ],
  ],
]);
