import React from 'react'

export default function Event_list() {
  return (
    <>
    <div >
				<div >
											<div >
							<div id="tribe-bar-dates"><label  for="tribe-bar-date">Events From</label><input type="text" name="tribe-bar-date" style={{position: "relative"}} id="tribe-bar-date" value="" placeholder="Date"/></div>
							<input type="hidden" name="tribe-bar-date-day" id="tribe-bar-date-day"  value=""/>						</div>
											<div >
							<label  for="tribe-bar-search">Search</label>
							<input type="text" name="tribe-bar-search" id="tribe-bar-search" value="" placeholder="Keyword"/>						</div>
										<div >
						<input  type="submit" name="submit-bar" value="Find Events"/>
					</div>
					
				</div>
				
			</div>
    <div>
      <div id="tribe-events-content" >

  <h2>Upcoming Events</h2>

<div ><ul><li>There were no results found.</li></ul></div>

  <div id="tribe-events-header" data-title="Upcoming Events" data-startofweek="1" data-view="list" data-baseurl="http://www.engage.veented.com/church/events/list/">

      
  
</div>

  <div id="tribe-events-footer">

    <li aria-label="previous events link">
    <a href="http://www.engage.veented.com/church/events/list/?tribe_event_display=past&amp;tribe_paged=1" rel="prev"><span>«</span> Previous Events</a>

  </li>
  
</div>

</div>
        
    </div>
    </>
  )
}
