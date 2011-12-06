module ApplicationHelper

  # Return a title on a per-page basis.
  def title
    base_title = "Merjerz"
    if @title.nil?
      base_title
    else
      "#{base_title} | #{@title}"
    end
  end

  def logo
    image_tag("merjerz_logo.jpg", :alt => "Merjerz")
  end
   # new added images section
  def home
    image_tag("home.png", :alt => "Home")
  end
   def raiting_triangle_img
      image_tag("raiting_triangle.png", :alt => "More", :class =>"more_raitings", :size => "10x7" )
   end 
  def like_img
     image_tag("smiley_happy.png", :alt => "Like", :size => "19x19")
  end
  def dislike_img
    image_tag("smiley_sad.png", :alt => "Like", :size => "19x19")
  end
  def responses_img
    image_tag("responses.png", :alt => "Responses", :size => "24x19")
  end
  
  def avatar_img
     image_tag("avatar.png", :alt => "Responses", :size => "67x67")
  end
  
  def deal_img
     image_tag("deal_icon_green.png", :alt => "", :size => "65x65")
  
  end
  
  def corporation_img
    image_tag("corporation_icon_green.png", :alt => "", :size => "65x65")
   
  end
  def should_buy_img
     image_tag("should_buy.png", :alt => "", :size => "58x44")
  end

  def compute_average_rating(entity)
    dimensions = case
                   when entity.class==Corporation
                     %w{integrity innovation technology product_quality service_levels}
                   when entity.class==Deal
                     [:revenue_synergies, :cost_synergies, :culture_match, :team_enhancement, :brand_enhancement, :product_enhancement, :geography_enhancement]
                 end
    sum = dimensions.inject(0) do
    |result, element|
      result + entity.rate_average(false, element)
    end
    sum / dimensions.length
  end


  def display_average_rating(entity)
    "Average rating:  #{compute_average_rating(entity).round(1).to_s} /5"
  end


end

