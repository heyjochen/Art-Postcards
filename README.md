# Postcard Shuffler: <a href="" target="_blank">See Live soon</a>
<a href="" target="_blank"><img src="/assets/readme.gif" /></a>

I am diving deeper into Object Oriented Programming and am building a Website that generates a Postcard with a random Image out of the Chicago Art Institute's Collection. By clicking a print button users are then able to print their postcard at home.

## Tech used: ![HTML5 BADGE](https://img.shields.io/static/v1?label=|&message=HTML5&color=23555f&style=flat-square&logo=html5) ![CSS BADGE](https://img.shields.io/static/v1?label=|&message=CSS3&color=285f65&style=flat-square&logo=css3) ![JAVASCRIPT BADGE](https://img.shields.io/static/v1?label=|&message=Javascript&color=3c7f5d&style=flat-square&logo=javascript)

I am focusing on how to fetch data from The Chicago Art Institue's API and develop my skills in Object Oriented Programming.

## Lessons Learned:
As the API of the Chicago Art Instute paginates requests after 10 entries and the Artwork ID's are not consecutive, I was not able to generate a random ID easily. My workaround was to make use of their offline data dump, manipulating the provided JSON file and extracting all of the ID's. From there I could map the ID's easily into an array and create a random number for the length of the Array, which corresponds to an ID. Using that ID, I was then able to fetch data from their API.


## More Projects

<table bordercolor="#66b2b2">
  
  <tr>
    <td width="33.3%" valign="top">
<a target="_blank" href="https://paleontologista.com/">Paleontologista</a>
        <br />
      <a target="_blank" href="https://paleontologista.com/">
            <img src="https://github.com/heyjochen/heyjochen/blob/main/assets/Website_Jingmai-OConnor-5fps.gif" width="100%"  alt=""/>
        </a>
    </td>
    <td width="33.3%" valign="top">
<a target="_blank" href="https://omomi.netlify.app/">Omomi Sushi</a>
      <br />
        <a target="_blank" href="https://omomi.netlify.app/">
          <img src="https://github.com/heyjochen/heyjochen/blob/main/assets/Website_omomi-5fps.gif" width="100%" alt=""/>
        </a>
    </td>
    <td width="33.3%" valign="top">
<a target="_blank" href="https://stierberger.com">Portfolio</a>
        <br />
        <a target="_blank" href="https://stierberger.com">
          <img src="https://github.com/heyjochen/heyjochen/blob/main/assets/Website_Jochen-Stierberger-5fps.gif" width="100%" alt=""/>
        </a>
    </td>
  </tr>
</table>